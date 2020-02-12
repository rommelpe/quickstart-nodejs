/// <reference path='../node_modules/mocha-typescript/globals.d.ts' />
import * as firebase from "@firebase/testing";

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
const projectId = 'onlinereservation-2lx';

const testApp = firebase.initializeAdminApp({ projectId });
const testFirestore = testApp.firestore();
testFirestore.settings({ experimentalForceLongPolling: true }); // enabling or disabling this line has no effect on the problem

describe('tests', () => {
  beforeEach(async () => {
    firebase.clearFirestoreData({ projectId });
  })
})

@suite
class MyApp {
  @test
  async "should be able to use the firestore emulator"() {
    const exampleDoc = testFirestore.doc('users/exampleUserId').get();
    console.log(exampleDoc)
    await firebase.assertSucceeds(exampleDoc)
  }
}