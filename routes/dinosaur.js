const express = require("express");

const router = express.Router();

const dinosaurCtrl = require("../controllers/dinosaur");

/**
 * @swagger
 * components:
 *   schemas:
 *     Dinosaur:
 *       type: object
 *       required:
 *         - name
 *         - historicalPeriod
 *         - size
 *         - weight
 *         - classification
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto generate id of the restaurant.
 *         name:
 *           type: string
 *           description: The dinosaur's name.
 *         historicalPeriod:
 *           type: string
 *           description: The dinosaur's historical period.
 *         size:
 *           type: number
 *           description: The dinosaur's size.
 *         weight:
 *           type: number
 *           description: The dinosaur's weight.
 *         classification:
 *           type: string
 *           description: The dinosaur's classification.
 *         continent:
 *           type: string
 *           description: The dinosaur's continent.
 *         description:
 *           type: string
 *           description: The dinosaur's description.
 *         diet:
 *           type: string
 *           description: The dinosaur's diet.
 *         environment:
 *           type: string
 *           description: The dinosaur's environment.
 *         discoveryYear:
 *           type: string
 *           description: The dinosaur's discovery year.
 *         updatedAt:
 *           type: date
 *           description: The updating date of the dinosaur.
 *         createdAt:
 *           type: date
 *           description: The creation date of the dinosaur.
 *       example:
 *         name: Aardonyx
 *         historicalPeriod: Début jurassique
 *         size: 6.5
 *         weight: 1
 *         classification: Anchisauria
 *         continent: Afrique
 *         description: An early stage in the evolution of sauropods.
 *         diet: herbivore
 *         environment: terrestrial
 *         discoveryYear: 2009
 *         updatedAt: 2023-05-17T17:38:27.772Z
 *         createdAt: 2023-05-17T17:38:27.772Z
 * /dinosaurs/historicalPeriod/{historicalPeriod}:
 *   get:
 *     summary: Retrieve all dinosaurs from the given historicalPeriod. (ex - jurassic, mesozoic, cretaceous)
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: historicalPeriod
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's historicalPeriod.
 *     responses:
 *       200:
 *         description: The list of all dinosaurs from the selected historicalPeriod.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/continent/{continent}:
 *   get:
 *     summary: Retrieve all dinosaurs from the given continent. (ex - europe, asia, america, africa, aceania)
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: continent
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's continent.
 *     responses:
 *       200:
 *         description: The list of all dinosaurs from the selected continent.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/name/{name}:
 *   get:
 *     summary: Retrieve all dinosaurs from the given name. (ex - aardonyx)
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's name.
 *     responses:
 *       200:
 *         description: The list of all dinosaurs from the selected name.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/diet/{diet}:
 *   get:
 *     summary: Retrieve all dinosaurs from the given diet. (ex - carnivore, herbivore, omnivore)
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: diet
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's diet.
 *     responses:
 *       200:
 *         description: The list of all dinosaurs from the selected diet.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/environment/{environment}:
 *   get:
 *     summary: Retrieve all dinosaurs from the given environment. (ex - terrestrial, aquatic, aerial)
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: environment
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's environment.
 *     responses:
 *       200:
 *         description: The list of all dinosaurs from the selected environment.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/{id}:
 *   get:
 *     summary: Retrieve a specific dinosaur.
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur id.
 *     responses:
 *       200:
 *         description: A specific dinosaur.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/:
 *   get:
 *     summary: Retrieve every dinosaurs.
 *     tags: [Dinosaur]
 *     responses:
 *       200:
 *         description: The list of all dinosaurs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/add:
 *   post:
 *     summary: Add a dinosaur.
 *     tags: [Dinosaur]
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Dinosaur'
 *     responses:
 *       201:
 *         description: Add a dinosaur.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dinosaur'
 *       400:
 *          description: L'ajout du dinosaure a échoué. Veuillez réessayer plus tard ou contacter l'assistance tehnique si l'erreur persiste.
 * /dinosaurs/edit/{id}:
 *   patch:
 *     summary: Edit a dinosaur informations.
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur's id.
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Dinosaur'
 *     responses:
 *       200:
 *         description: Edit a dinosaur.
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 * /dinosaurs/delete/{id}:
 *   delete:
 *     summary: Archive a dinosaur.
 *     tags: [Dinosaur]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The dinosaur id.
 *     responses:
 *       200:
 *         description: Archive a dinosaur.
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dinosaur'
 *       404:
 *          description: Aucune données n'a été trouvé.
 *       403:
 *          description: Impossible d'accéder à la liste demandée.
 */

router.post("/add", dinosaurCtrl.addDinosaur);
router.get(
  "/historicalPeriod/:historicalPeriod",
  dinosaurCtrl.filterDinosaurByHistoricalPeriod
);
router.get("/continent/:continent", dinosaurCtrl.filterDinosaurByContinent);
router.get("/name/:name", dinosaurCtrl.filterDinosaurByName);
router.get("/diet/:diet", dinosaurCtrl.filterDinosaurByDiet);
router.get(
  "/environment/:environment",
  dinosaurCtrl.filterDinosaurByEnvironment
);

router.get("/:id", dinosaurCtrl.getDinosaurDetail);
router.get("/", dinosaurCtrl.getAllDinosaurs);
router.patch("/edit/:id", dinosaurCtrl.editDinosaur);
router.delete("/delete/:id", dinosaurCtrl.deleteDinosaur);

module.exports = router;
