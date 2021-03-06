(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenido-bienvenido-module"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
  \************************************************************************************/
/*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return AngularFirestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return AngularFirestoreCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return AngularFirestoreCollectionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return AngularFirestoreDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return AngularFirestoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return ENABLE_PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return PERSISTENCE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return associateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return combineChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return combineChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return docChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return fromCollectionRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return fromDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return sortedChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */

function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot(subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot(subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'value' }))));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function docChanges(query, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} action
     * @return {?}
     */
    action => action.payload.docChanges()
        .map((/**
     * @param {?} change
     * @return {?}
     */
    change => ((/** @type {?} */ ({ type: change.type, payload: change }))))))));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @template T
 * @param {?} query
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function sortedChanges(query, events, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.payload.docChanges())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
     * @param {?} current
     * @param {?} changes
     * @return {?}
     */
    (current, changes) => combineChanges(current, changes, events)), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.map((/**
     * @param {?} c
     * @return {?}
     */
    c => ((/** @type {?} */ ({ type: c.type, payload: c }))))))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 * @template T
 * @param {?} current
 * @param {?} changes
 * @param {?} events
 * @return {?}
 */
function combineChanges(current, changes, events) {
    changes.forEach((/**
     * @param {?} change
     * @return {?}
     */
    change => {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    }));
    return current;
}
/**
 * Creates a new sorted array from a new change.
 * @template T
 * @param {?} combined
 * @param {?} change
 * @return {?}
 */
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                // Not sure why the duplicates are getting fired
            }
            else {
                combined.splice(change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                // When an item changes position we first remove it
                // and then add it's new position
                if (change.oldIndex !== change.newIndex) {
                    combined.splice(change.oldIndex, 1);
                    combined.splice(change.newIndex, 0, change);
                }
                else {
                    combined.splice(change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                combined.splice(change.oldIndex, 1);
            }
            break;
    }
    return combined;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollection {
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     * @param {?} ref
     * @param {?} query
     * @param {?} afs
     */
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign(Object.assign({}, (/** @type {?} */ (a.data()))), { [options.idField]: a.id })));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.ref.add(data);
    }
    /**
     * Create a reference to a single document in a collection.
     * @template T
     * @param {?=} path
     * @return {?}
     */
    doc(path) {
        return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreDocument {
    /**
     * The contstuctor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param {?} ref
     * @param {?} afs
     */
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    /**
     * Create or overwrite a single document.
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(data, options) {
        return this.ref.set(data, options);
    }
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param {?} data
     * @return {?}
     */
    update(data) {
        return this.ref.update(data);
    }
    /**
     * Delete a document.
     * @return {?}
     */
    delete() {
        return this.ref.delete();
    }
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @template R
     * @param {?} path
     * @param {?=} queryFn
     * @return {?}
     */
    collection(path, queryFn) {
        /** @type {?} */
        const collectionRef = this.ref.collection(path);
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    /**
     * Listen to snapshot updates from the document.
     * @return {?}
     */
    snapshotChanges() {
        /** @type {?} */
        const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to unwrapped snapshot updates from the document.
     * @return {?}
     */
    valueChanges() {
        return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            return action.payload.data();
        })));
    }
    /**
     * Retrieve the document once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollectionGroup {
    /**
     * The constructor takes in a CollectionGroupQuery to provide wrapper methods
     * for data operations and data streaming.
     * @param {?} query
     * @param {?} afs
     */
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to all documents in the collection and its possible query as an Observable.
     * @return {?}
     */
    valueChanges() {
        /** @type {?} */
        const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => a.data())))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 * @type {?}
 */
const ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
/** @type {?} */
const PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
/** @type {?} */
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param {?} collectionRef - A collection reference to query
 * @param {?=} queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 * @return {?}
 */
function associateQuery(collectionRef, queryFn = (/**
 * @param {?} ref
 * @return {?}
 */
ref => ref)) {
    /** @type {?} */
    const query = queryFn(collectionRef);
    /** @type {?} */
    const ref = collectionRef;
    return { query, ref };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '\@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * \@Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */
class AngularFirestore {
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} shouldEnablePersistence
     * @param {?} settings
     * @param {?} platformId
     * @param {?} zone
     * @param {?} persistenceSettings
     */
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, 
    // tslint:disable-next-line:ban-types
    platformId, zone, persistenceSettings) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        this.firestore = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
            // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
            //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
            //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue
            if (_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"]) {
                Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"])(_firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a);
            }
            /** @type {?} */
            const firestore = app.firestore();
            if (settings) {
                firestore.settings(settings);
            }
            return firestore;
        }));
        if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            // We need to try/catch here because not all enablePersistence() failures are caught
            // https://github.com/firebase/firebase-js-sdk/issues/608
            /** @type {?} */
            const enablePersistence = (/**
             * @return {?}
             */
            () => {
                try {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.enablePersistence(persistenceSettings || undefined).then((/**
                     * @return {?}
                     */
                    () => true), (/**
                     * @return {?}
                     */
                    () => false)));
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }
            });
            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        }
        else {
            this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    collection(pathOrRef, queryFn) {
        /** @type {?} */
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreCollection(refInZone, query, this);
    }
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     * @template T
     * @param {?} collectionId
     * @param {?=} queryGroupFn
     * @return {?}
     */
    collectionGroup(collectionId, queryGroupFn) {
        /** @type {?} */
        const queryFn = queryGroupFn || ((/**
         * @param {?} ref
         * @return {?}
         */
        ref => ref));
        /** @type {?} */
        const collectionGroup = this.firestore.collectionGroup(collectionId);
        return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    doc(pathOrRef) {
        /** @type {?} */
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
        }
        else {
            ref = pathOrRef;
        }
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreDocument(refInZone, this);
    }
    /**
     * Returns a generated Firestore Document Id.
     * @return {?}
     */
    createId() {
        return this.firestore.collection('_').doc().id;
    }
}
AngularFirestore.ɵfac = function AngularFirestore_Factory(t) { return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8)); };
/** @nocollapse */
AngularFirestore.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ENABLE_PERSISTENCE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SETTINGS,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERSISTENCE_SETTINGS,] }] }
];
/** @nocollapse */ AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFirestore_Factory() { return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8)); }, token: AngularFirestore, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ENABLE_PERSISTENCE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SETTINGS]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PERSISTENCE_SETTINGS]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFirestoreModule });
AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFirestoreModule_Factory(t) { return new (t || AngularFirestoreModule)(); }, providers: [AngularFirestore] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFirestore]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DocumentSnapshotExists() { }
if (false) {}
/**
 * @record
 */
function DocumentSnapshotDoesNotExist() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QueryDocumentSnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QuerySnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChange() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChangeAction() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Action() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Reference() { }
if (false) {}
/**
 * A structure that provides an association between a reference
 * and a query on that reference. Note: Performing operations
 * on the reference can lead to confusing results with complicated
 * queries.
 *
 * Example:
 *
 * const query = ref.where('type', '==', 'Book').
 *                  .where('price', '>' 18.00)
 *                  .where('price', '<' 100.00)
 *                  .where('category', '==', 'Fiction')
 *                  .where('publisher', '==', 'BigPublisher')
 *
 * // This addition would not be a result of the query above
 * ref.add({
 *  type: 'Magazine',
 *  price: 4.99,
 *  category: 'Sports',
 *  publisher: 'SportsPublisher'
 * });
 * @record
 */
function AssociatedReference() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-firestore.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
  \**********************************************************************************/
/*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, createStorageRef, createUploadTask, fromTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function() { return AngularFireStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function() { return AngularFireStorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET", function() { return BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorageRef", function() { return createStorageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUploadTask", function() { return createUploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTask", function() { return fromTask; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} task
 * @return {?}
 */

function fromTask(task) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        const progress = (/**
         * @param {?} snap
         * @return {?}
         */
        (snap) => subscriber.next(snap));
        /** @type {?} */
        const error = (/**
         * @param {?} e
         * @return {?}
         */
        e => subscriber.error(e));
        /** @type {?} */
        const complete = (/**
         * @return {?}
         */
        () => subscriber.complete());
        task.on('state_changed', progress, error, complete);
        return (/**
         * @return {?}
         */
        () => task.cancel());
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AngularFireUploadTask() { }
if (false) {}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 * @param {?} task
 * @return {?}
 */
function createUploadTask(task) {
    /** @type {?} */
    const inner$ = fromTask(task);
    return {
        task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: (/**
         * @return {?}
         */
        () => inner$),
        percentageChanges: (/**
         * @return {?}
         */
        () => inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} s
         * @return {?}
         */
        s => s.bytesTransferred / s.totalBytes * 100))))
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AngularFireStorageReference() { }
if (false) {}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 * @param {?} ref
 * @param {?} schedulers
 * @param {?} keepUnstableUntilFirst
 * @return {?}
 */
function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
    return {
        getDownloadURL: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((/**
         * @return {?}
         */
        () => ref.getDownloadURL())), keepUnstableUntilFirst)),
        getMetadata: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((/**
         * @return {?}
         */
        () => ref.getMetadata())), keepUnstableUntilFirst)),
        delete: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.delete())),
        child: (/**
         * @param {?} path
         * @return {?}
         */
        (path) => createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst)),
        updateMetadata: (/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.updateMetadata(meta))),
        put: (/**
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        (data, metadata) => {
            /** @type {?} */
            const task = ref.put(data, metadata);
            return createUploadTask(task);
        }),
        putString: (/**
         * @param {?} data
         * @param {?=} format
         * @param {?=} metadata
         * @return {?}
         */
        (data, format, metadata) => {
            /** @type {?} */
            const task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }),
        listAll: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.listAll()))
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storageBucket');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */
class AngularFireStorage {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} storageBucket
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, storageBucket, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        this.storage = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
            return app.storage(storageBucket || undefined);
        }));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ref(path) {
        return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */
    upload(path, data, metadata) {
        /** @type {?} */
        const storageRef = this.storage.ref(path);
        /** @type {?} */
        const ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
        return ref.put(data, metadata);
    }
}
AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) { return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
/** @nocollapse */
AngularFireStorage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [BUCKET,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
/** @nocollapse */ AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function AngularFireStorage_Factory() { return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); }, token: AngularFireStorage, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [BUCKET]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireStorageModule {
}
AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AngularFireStorageModule });
AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AngularFireStorageModule_Factory(t) { return new (t || AngularFireStorageModule)(); }, providers: [AngularFireStorage] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                providers: [AngularFireStorage]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-storage.js.map

/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = __webpack_require__(/*! tslib */ "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js"), e = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"), n = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js"), r = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js"), i = __webpack_require__(/*! @firebase/webchannel-wrapper */ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"), o = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");

function s(t) {
    return t && "object" == typeof t && "default" in t ? t : {
        default: t
    };
}

var u =  s(e), a = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, c = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return t.__extends(n, e), n;
}(Error), h = new n.Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function f() {
    return h.logLevel;
}

function l(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.DEBUG) {
        var o = r.map(v);
        h.debug.apply(h, t.__spreadArrays([ "Firestore (7.21.0): " + e ], o));
    }
}

function p(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.ERROR) {
        var o = r.map(v);
        h.error.apply(h, t.__spreadArrays([ "Firestore (7.21.0): " + e ], o));
    }
}

function d(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.WARN) {
        var o = r.map(v);
        h.warn.apply(h, t.__spreadArrays([ "Firestore (7.21.0): " + e ], o));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function v(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function y(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (7.21.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw p(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function g(t, e) {
    t || y();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function m(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function _(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function b(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */ var I = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && y(), void 0 === n ? n = t.length - e : n > t.length - e && y(), 
        this.segments = t, this.offset = e, this.t = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.t;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.i(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.o(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.u = function(t) {
        return t = void 0 === t ? 1 : t, this.o(this.segments, this.offset + t, this.length - t);
    }, t.prototype.h = function() {
        return this.o(this.segments, this.offset, this.length - 1);
    }, t.prototype.l = function() {
        return this.segments[this.offset];
    }, t.prototype._ = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.m = function() {
        return 0 === this.length;
    }, t.prototype.T = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.I = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.A = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.i = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), E = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.o = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.R = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.A().join("/");
    }, n.prototype.toString = function() {
        return this.R();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.P = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.g = function() {
        return new n([]);
    }, n;
}(I), T = /^[_a-zA-Z][_a-zA-Z0-9]*$/, N = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.o = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.V = function(t) {
        return T.test(t);
    }, n.prototype.R = function() {
        return this.A().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.V(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.R();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.p = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.v = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.S = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new c(a.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var h = t[i + 1];
                if ("\\" !== h && "." !== h && "`" !== h) throw new c(a.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += h, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new c(a.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.g = function() {
        return new n([]);
    }, n;
}(I), A = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.D = function(e) {
        return new t(E.P(e));
    }, t.C = function(e) {
        return new t(E.P(e).u(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.N = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === E.i(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.i = function(t, e) {
        return E.i(t.path, e.path);
    }, t.F = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.$ = function(e) {
        return new t(new E(e.slice()));
    }, t;
}();

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function D(t, e) {
    if (0 !== e.length) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + W(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function S(t, e, n) {
    if (e.length !== n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires " + W(n, "argument") + ", but was called with " + W(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function x(t, e, n) {
    if (e.length < n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires at least " + W(n, "argument") + ", but was called with " + W(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function k(t, e, n, r) {
    if (e.length < n || e.length > r) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + W(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function L(t, e, n, r) {
    C(t, e, G(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function O(t, e, n, r) {
    void 0 !== r && L(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function R(t, e, n, r) {
    C(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function U(t, e, n, r) {
    void 0 !== r && R(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function P(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var h = u[s];
            if (h === r) return;
            o.push(q(h));
        }
        var f = q(r);
        throw new c(a.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function V(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new c(a.INVALID_ARGUMENT, "Invalid value " + q(r) + " provided to function " + t + "() for its " + G(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function C(t, e, n, r) {
    if (!("object" === e ? M(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = q(r);
        throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function M(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function q(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : y();
}

function F(t, e, n) {
    if (void 0 === n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + G(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function j(t, e, n) {
    _(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new c(a.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function z(t, e, n, r) {
    var i = q(r);
    return new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + G(n) + " argument to be a " + e + ", but it was: " + i);
}

function B(t, e, n) {
    if (n <= 0) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + G(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function G(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function W(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function Q(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var K = /** @class */ function() {
    function t() {}
    return t.k = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = Q(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function H(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Y(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function X(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var Z = /** @class */ function() {
    function t(t) {
        this.M = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.M, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.M);
    }, t.prototype.O = function() {
        return 2 * this.M.length;
    }, t.prototype.L = function(t) {
        return H(this.M, t.M);
    }, t.prototype.isEqual = function(t) {
        return this.M === t.M;
    }, t;
}();

Z.B = new Z("");

var J = /** @class */ function() {
    function t(t) {
        this.q = t;
    }
    return t.fromBase64String = function(e) {
        try {
            return new t(Z.fromBase64String(e));
        } catch (e) {
            throw new c(a.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        return new t(Z.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return this.q.toBase64();
    }, t.prototype.toUint8Array = function() {
        return this.q.toUint8Array();
    }, t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.q.isEqual(t.q);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function $() {
    if ("undefined" == typeof Uint8Array) throw new c(a.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function tt() {
    if ("undefined" == typeof atob) throw new c(a.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 *
 * This class is directly exposed in the public API. It extends the Bytes class
 * of the firestore-exp API to support `instanceof Bytes` checks during user
 * data conversion.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var et = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.fromBase64String = function(t) {
        S("Blob.fromBase64String", arguments, 1), L("Blob.fromBase64String", "string", 1, t), 
        tt();
        try {
            return new n(Z.fromBase64String(t));
        } catch (t) {
            throw new c(a.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
    }, n.fromUint8Array = function(t) {
        if (S("Blob.fromUint8Array", arguments, 1), $(), !(t instanceof Uint8Array)) throw z("Blob.fromUint8Array", "Uint8Array", 1, t);
        return new n(Z.fromUint8Array(t));
    }, n.prototype.toBase64 = function() {
        return S("Blob.toBase64", arguments, 0), tt(), e.prototype.toBase64.call(this);
    }, n.prototype.toUint8Array = function() {
        return S("Blob.toUint8Array", arguments, 0), $(), e.prototype.toUint8Array.call(this);
    }, n.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, n;
}(J), nt = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.U = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, rt = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "W", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.L = function(t) {
        return H(this.projectId, t.projectId) || H(this.database, t.database);
    }, t;
}(), it = /** @class */ function() {
    function t(t, e) {
        this.j = t, this.K = e, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.G = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.j(t), n = this.G[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.K(s, t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.j(t), r = this.G[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.K(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.G[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.j(t), n = this.G[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.K(n[r][0], t)) return 1 === n.length ? delete this.G[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        _(this.G, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.m = function() {
        return b(this.G);
    }, t;
}(), ot = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.H = function(t) {
        return this.seconds === t.seconds ? H(this.nanoseconds, t.nanoseconds) : H(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), st = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.Y = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new ot(0, 0));
    }, t.prototype.L = function(t) {
        return this.timestamp.H(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.J = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.X = function() {
        return this.timestamp;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */
function ut(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function at(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function ct(t) {
    return "number" == typeof t && Number.isInteger(t) && !at(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
var ht = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.Z = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function ft(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new ht(t, e, n, r, i, o, s);
}

function lt(t) {
    var e = m(t);
    if (null === e.Z) {
        var n = e.path.R();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.R() + t.op.toString() + ne(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return (e = t).field.R() + e.dir;
            var e;
        })).join(","), ut(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += ir(e.startAt)), e.endAt && (n += "|ub:", n += ir(e.endAt)), e.Z = n;
    }
    return e.Z;
}

function pt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!cr(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !Jt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!sr(t.startAt, e.startAt) && sr(t.endAt, e.endAt);
}

function dt(t) {
    return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable set of metadata that the local store tracks for each target.
 */ var vt, yt, gt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = st.min()), void 0 === o && (o = st.min()), void 0 === s && (s = Z.B), 
        this.target = t, this.targetId = e, this.tt = n, this.sequenceNumber = r, this.et = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.nt = function(e) {
        return new t(this.target, this.targetId, this.tt, e, this.et, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.st = function(e, n) {
        return new t(this.target, this.targetId, this.tt, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.it = function(e) {
        return new t(this.target, this.targetId, this.tt, this.sequenceNumber, this.et, e, this.resumeToken);
    }, t;
}(), mt = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function wt(t) {
    switch (t) {
      case a.OK:
        return y();

      case a.CANCELLED:
      case a.UNKNOWN:
      case a.DEADLINE_EXCEEDED:
      case a.RESOURCE_EXHAUSTED:
      case a.INTERNAL:
      case a.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case a.UNAUTHENTICATED:
        return !1;

      case a.INVALID_ARGUMENT:
      case a.NOT_FOUND:
      case a.ALREADY_EXISTS:
      case a.PERMISSION_DENIED:
      case a.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case a.ABORTED:
      case a.OUT_OF_RANGE:
      case a.UNIMPLEMENTED:
      case a.DATA_LOSS:
        return !0;

      default:
        return y();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function _t(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return p("GRPC error has no .code"), a.UNKNOWN;
    switch (t) {
      case vt.OK:
        return a.OK;

      case vt.CANCELLED:
        return a.CANCELLED;

      case vt.UNKNOWN:
        return a.UNKNOWN;

      case vt.DEADLINE_EXCEEDED:
        return a.DEADLINE_EXCEEDED;

      case vt.RESOURCE_EXHAUSTED:
        return a.RESOURCE_EXHAUSTED;

      case vt.INTERNAL:
        return a.INTERNAL;

      case vt.UNAVAILABLE:
        return a.UNAVAILABLE;

      case vt.UNAUTHENTICATED:
        return a.UNAUTHENTICATED;

      case vt.INVALID_ARGUMENT:
        return a.INVALID_ARGUMENT;

      case vt.NOT_FOUND:
        return a.NOT_FOUND;

      case vt.ALREADY_EXISTS:
        return a.ALREADY_EXISTS;

      case vt.PERMISSION_DENIED:
        return a.PERMISSION_DENIED;

      case vt.FAILED_PRECONDITION:
        return a.FAILED_PRECONDITION;

      case vt.ABORTED:
        return a.ABORTED;

      case vt.OUT_OF_RANGE:
        return a.OUT_OF_RANGE;

      case vt.UNIMPLEMENTED:
        return a.UNIMPLEMENTED;

      case vt.DATA_LOSS:
        return a.DATA_LOSS;

      default:
        return y();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (yt = vt || (vt = {}))[yt.OK = 0] = "OK", yt[yt.CANCELLED = 1] = "CANCELLED", 
yt[yt.UNKNOWN = 2] = "UNKNOWN", yt[yt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
yt[yt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", yt[yt.NOT_FOUND = 5] = "NOT_FOUND", 
yt[yt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", yt[yt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
yt[yt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", yt[yt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
yt[yt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", yt[yt.ABORTED = 10] = "ABORTED", 
yt[yt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", yt[yt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
yt[yt.INTERNAL = 13] = "INTERNAL", yt[yt.UNAVAILABLE = 14] = "UNAVAILABLE", yt[yt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var bt = /** @class */ function() {
    function t(t, e) {
        this.i = t, this.root = e || Et.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.rt = function(e, n) {
        return new t(this.i, this.root.rt(e, n, this.i).copy(null, null, Et.ot, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.i, this.root.remove(e, this.i).copy(null, null, Et.ot, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.m(); ) {
            var n = this.i(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.m(); ) {
            var r = this.i(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.m = function() {
        return this.root.m();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.at = function() {
        return this.root.at();
    }, 
    // Returns the maximum key in the map.
    t.prototype.ct = function() {
        return this.root.ct();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.root.ut(t);
    }, t.prototype.forEach = function(t) {
        this.ut((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ut((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.root.ht(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.lt = function() {
        return new It(this.root, null, this.i, !1);
    }, t.prototype._t = function(t) {
        return new It(this.root, t, this.i, !1);
    }, t.prototype.ft = function() {
        return new It(this.root, null, this.i, !0);
    }, t.prototype.dt = function(t) {
        return new It(this.root, t, this.i, !0);
    }, t;
}(), It = /** @class */ function() {
    function t(t, e, n, r) {
        this.wt = r, this.Tt = [];
        for (var i = 1; !t.m(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.wt ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Tt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Tt.push(t), t = this.wt ? t.right : t.left;
        }
    }
    return t.prototype.Et = function() {
        var t = this.Tt.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.wt) for (t = t.left; !t.m(); ) this.Tt.push(t), t = t.right; else for (t = t.right; !t.m(); ) this.Tt.push(t), 
        t = t.left;
        return e;
    }, t.prototype.It = function() {
        return this.Tt.length > 0;
    }, t.prototype.At = function() {
        if (0 === this.Tt.length) return null;
        var t = this.Tt[this.Tt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), Et = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.m = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.m() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.at = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ct = function() {
        return this.right.m() ? this.key : this.right.ct();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.rt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.rt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.rt(t, e, n))).Rt();
    }, t.prototype.Pt = function() {
        if (this.left.m()) return t.EMPTY;
        var e = this;
        return e.left.gt() || e.left.left.gt() || (e = e.yt()), (e = e.copy(null, null, null, e.left.Pt(), null)).Rt();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.m() || i.left.gt() || i.left.left.gt() || (i = i.yt()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.gt() && (i = i.Vt()), i.right.m() || i.right.gt() || i.right.left.gt() || (i = i.bt()), 
            0 === n(e, i.key)) {
                if (i.right.m()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Pt());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.Rt();
    }, t.prototype.gt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Rt = function() {
        var t = this;
        return t.right.gt() && !t.left.gt() && (t = t.vt()), t.left.gt() && t.left.left.gt() && (t = t.Vt()), 
        t.left.gt() && t.right.gt() && (t = t.St()), t;
    }, t.prototype.yt = function() {
        var t = this.St();
        return t.right.left.gt() && (t = (t = (t = t.copy(null, null, null, null, t.right.Vt())).vt()).St()), 
        t;
    }, t.prototype.bt = function() {
        var t = this.St();
        return t.left.left.gt() && (t = (t = t.Vt()).St()), t;
    }, t.prototype.vt = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.Vt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.St = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.Dt = function() {
        var t = this.Ct();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Ct = function() {
        if (this.gt() && this.left.gt()) throw y();
        if (this.right.gt()) throw y();
        var t = this.left.Ct();
        if (t !== this.right.Ct()) throw y();
        return t + (this.gt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Et.EMPTY = null, Et.RED = !0, Et.ot = !1, 
// end LLRBEmptyNode
Et.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.rt = function(t, e, n) {
        return new Et(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.m = function() {
        return !0;
    }, t.prototype.ut = function(t) {
        return !1;
    }, t.prototype.ht = function(t) {
        return !1;
    }, t.prototype.at = function() {
        return null;
    }, t.prototype.ct = function() {
        return null;
    }, t.prototype.gt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Dt = function() {
        return !0;
    }, t.prototype.Ct = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Tt = /** @class */ function() {
    function t(t) {
        this.i = t, this.data = new bt(this.i);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.at();
    }, t.prototype.last = function() {
        return this.data.ct();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Nt = function(t, e) {
        for (var n = this.data._t(t[0]); n.It(); ) {
            var r = n.Et();
            if (this.i(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Ft = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data._t(e) : this.data.lt(); n.It(); ) if (!t(n.Et().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.xt = function(t) {
        var e = this.data._t(t);
        return e.It() ? e.Et().key : null;
    }, t.prototype.lt = function() {
        return new Nt(this.data.lt());
    }, t.prototype._t = function(t) {
        return new Nt(this.data._t(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).rt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.m = function() {
        return this.data.m();
    }, t.prototype.$t = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.lt(), r = e.data.lt(); n.It(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (0 !== this.i(i, o)) return !1;
        }
        return !0;
    }, t.prototype.A = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.i);
        return n.data = e, n;
    }, t;
}(), Nt = /** @class */ function() {
    function t(t) {
        this.kt = t;
    }
    return t.prototype.Et = function() {
        return this.kt.Et().key;
    }, t.prototype.It = function() {
        return this.kt.It();
    }, t;
}(), At = new bt(A.i);

function Dt() {
    return At;
}

function St() {
    return Dt();
}

var xt = new bt(A.i);

function kt() {
    return xt;
}

var Lt = new bt(A.i), Ot = new Tt(A.i);

function Rt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Ot, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var Ut = new Tt(H);

function Pt() {
    return Ut;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Vt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.i = t ? function(e, n) {
            return t(e, n) || A.i(e.key, n.key);
        } : function(t, e) {
            return A.i(t.key, e.key);
        }, this.Mt = kt(), this.Ot = new bt(this.i)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Lt = function(e) {
        return new t(e.i);
    }, t.prototype.has = function(t) {
        return null != this.Mt.get(t);
    }, t.prototype.get = function(t) {
        return this.Mt.get(t);
    }, t.prototype.first = function() {
        return this.Ot.at();
    }, t.prototype.last = function() {
        return this.Ot.ct();
    }, t.prototype.m = function() {
        return this.Ot.m();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Mt.get(t);
        return e ? this.Ot.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Ot.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Ot.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Mt.rt(t.key, t), e.Ot.rt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.Mt.remove(t), this.Ot.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Ot.lt(), r = e.Ot.lt(); n.It(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.i = this.i, r.Mt = e, r.Ot = n, r;
    }, t;
}(), Ct = /** @class */ function() {
    function t() {
        this.Bt = new bt(A.i);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.Bt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Bt = this.Bt.rt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Bt = this.Bt.rt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Bt = this.Bt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        y() : this.Bt = this.Bt.rt(e, t);
    }, t.prototype.qt = function() {
        var t = [];
        return this.Bt.ut((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), Mt = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Ut = n, this.docChanges = r, this.Qt = i, this.fromCache = o, 
        this.Wt = s, this.jt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Kt = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Vt.Lt(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Qt.m();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Wt === t.Wt && this.Qt.isEqual(t.Qt) && Bn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ut.isEqual(t.Ut))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), qt = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.et = t, this.Gt = e, this.zt = n, this.Ht = r, this.Yt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Jt = function(e, n) {
        var r = new Map;
        return r.set(e, Ft.Xt(e, n)), new t(st.min(), r, Pt(), Dt(), Rt());
    }, t;
}(), Ft = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Zt = e, this.te = n, this.ee = r, this.ne = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Xt = function(e, n) {
        return new t(Z.B, n, Rt(), Rt(), Rt());
    }, t;
}(), jt = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.se = t, this.removedTargetIds = e, this.key = n, this.ie = r;
}, zt = function(t, e) {
    this.targetId = t, this.re = e;
}, Bt = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = Z.B), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, Gt = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.oe = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.ae = Kt(), 
        /** See public getters for explanations of these fields. */
        this.ce = Z.B, this.ue = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.he = !0;
    }
    return Object.defineProperty(t.prototype, "Zt", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.ue;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.ce;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "le", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.oe;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_e", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.he;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.fe = function(t) {
        t.O() > 0 && (this.he = !0, this.ce = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.de = function() {
        var t = Rt(), e = Rt(), n = Rt();
        return this.ae.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                y();
            }
        })), new Ft(this.ce, this.ue, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.we = function() {
        this.he = !1, this.ae = Kt();
    }, t.prototype.me = function(t, e) {
        this.he = !0, this.ae = this.ae.rt(t, e);
    }, t.prototype.Te = function(t) {
        this.he = !0, this.ae = this.ae.remove(t);
    }, t.prototype.Ee = function() {
        this.oe += 1;
    }, t.prototype.Ie = function() {
        this.oe -= 1;
    }, t.prototype.Ae = function() {
        this.he = !0, this.ue = !0;
    }, t;
}(), Wt = /** @class */ function() {
    function t(t) {
        this.Re = t, 
        /** The internal state of all tracked targets. */
        this.Pe = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.ge = Dt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.ye = Qt(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Ve = new Tt(H)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.pe = function(t) {
        for (var e = 0, n = t.se; e < n.length; e++) {
            var r = n[e];
            t.ie instanceof Dn ? this.be(r, t.ie) : t.ie instanceof Sn && this.ve(r, t.key, t.ie);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.ve(s, t.key, t.ie);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Se = function(t) {
        var e = this;
        this.De(t, (function(n) {
            var r = e.Ce(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Ne(n) && r.fe(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ie(), r.le || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.we(), r.fe(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ie(), r.le || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Ne(n) && (r.Ae(), r.fe(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Ne(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Fe(n), r.fe(t.resumeToken));
                break;

              default:
                y();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.De = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Pe.forEach((function(t, r) {
            n.Ne(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.xe = function(t) {
        var e = t.targetId, n = t.re.count, r = this.$e(e);
        if (r) {
            var i = r.target;
            if (dt(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new A(i.path);
                this.ve(e, o, new Sn(o, st.min()));
            } else g(1 === n); else this.ke(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Fe(e), this.Ve = this.Ve.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Me = function(t) {
        var e = this, n = new Map;
        this.Pe.forEach((function(r, i) {
            var o = e.$e(i);
            if (o) {
                if (r.Zt && dt(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new A(o.target.path);
                    null !== e.ge.get(s) || e.Oe(i, s) || e.ve(i, s, new Sn(s, t));
                }
                r._e && (n.set(i, r.de()), r.we());
            }
        }));
        var r = Rt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.ye.forEach((function(t, n) {
            var i = !0;
            n.Ft((function(t) {
                var n = e.$e(t);
                return !n || 2 /* LimboResolution */ === n.tt || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new qt(t, n, this.Ve, this.ge, r);
        return this.ge = Dt(), this.ye = Qt(), this.Ve = new Tt(H), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.be = function(t, e) {
        if (this.Ne(t)) {
            var n = this.Oe(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Ce(t).me(e.key, n), this.ge = this.ge.rt(e.key, e), this.ye = this.ye.rt(e.key, this.Le(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.ve = function(t, e, n) {
        if (this.Ne(t)) {
            var r = this.Ce(t);
            this.Oe(t, e) ? r.me(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Te(e), this.ye = this.ye.rt(e, this.Le(e).delete(t)), n && (this.ge = this.ge.rt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Pe.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.ke = function(t) {
        var e = this.Ce(t).de();
        return this.Re.Be(t).size + e.te.size - e.ne.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ee = function(t) {
        this.Ce(t).Ee();
    }, t.prototype.Ce = function(t) {
        var e = this.Pe.get(t);
        return e || (e = new Gt, this.Pe.set(t, e)), e;
    }, t.prototype.Le = function(t) {
        var e = this.ye.get(t);
        return e || (e = new Tt(H), this.ye = this.ye.rt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Ne = function(t) {
        var e = null !== this.$e(t);
        return e || l("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.$e = function(t) {
        var e = this.Pe.get(t);
        return e && e.le ? null : this.Re.qe(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Fe = function(t) {
        var e = this;
        this.Pe.set(t, new Gt), this.Re.Be(t).forEach((function(n) {
            e.ve(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Oe = function(t, e) {
        return this.Re.Be(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function Qt() {
    return new bt(A.i);
}

function Kt() {
    return new bt(A.i);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Ht(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Yt(t) {
    var e = re(t.mapValue.fields.__local_write_time__.timestampValue);
    return new ot(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var Xt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Zt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Ht(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : y();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Jt(t, e) {
    var n = Zt(t);
    if (n !== Zt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Yt(t).isEqual(Yt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = re(t.timestampValue), r = re(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return oe(t.bytesValue).isEqual(oe(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return ie(t.geoPointValue.latitude) === ie(e.geoPointValue.latitude) && ie(t.geoPointValue.longitude) === ie(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return ie(t.integerValue) === ie(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = ie(t.doubleValue), r = ie(e.doubleValue);
                return n === r ? at(n) === at(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Y(t.arrayValue.values || [], e.arrayValue.values || [], Jt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (w(n) !== w(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Jt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return y();
    }
}

function $t(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Jt(t, e);
    }));
}

function te(t, e) {
    var n = Zt(t), r = Zt(e);
    if (n !== r) return H(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return H(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = ie(t.integerValue || t.doubleValue), r = ie(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return ee(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return ee(Yt(t), Yt(e));

      case 5 /* StringValue */ :
        return H(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = oe(t), r = oe(e);
            return n.L(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = H(n[i], r[i]);
                if (0 !== o) return o;
            }
            return H(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = H(ie(t.latitude), ie(e.latitude));
            return 0 !== n ? n : H(ie(t.longitude), ie(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = te(n[i], r[i]);
                if (o) return o;
            }
            return H(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = H(r[s], o[s]);
                if (0 !== u) return u;
                var a = te(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return H(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw y();
    }
}

function ee(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return H(t, e);
    var n = re(t), r = re(e), i = H(n.seconds, r.seconds);
    return 0 !== i ? i : H(n.nanos, r.nanos);
}

function ne(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = re(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? oe(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        A.C(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : y();
        var n, r;
    }(t);
}

function re(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (g(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = Xt.exec(t);
        if (g(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: ie(t.seconds),
        nanos: ie(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function ie(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function oe(t) {
    return "string" == typeof t ? Z.fromBase64String(t) : Z.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function se(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
    };
}

/** Returns true if `value` is an IntegerValue . */ function ue(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function ae(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function ce(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function he(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function fe(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var le = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, pe = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, de = function(t, e) {
    this.U = t, this.Ue = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns an IntegerValue for `value`.
 */
function ve(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ye(t, e) {
    if (t.Ue) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: at(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function ge(t, e) {
    return ct(e) ? ve(e) : ye(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function me(t, e) {
    return t.Ue ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function we(t, e) {
    return t.Ue ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function _e(t, e) {
    return me(t, e.X());
}

function be(t) {
    return g(!!t), st.Y(function(t) {
        var e = re(t);
        return new ot(e.seconds, e.nanos);
    }(t));
}

function Ie(t, e) {
    return function(t) {
        return new E([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).R();
}

function Ee(t) {
    var e = E.P(t);
    return g(Ge(e)), e;
}

function Te(t, e) {
    return Ie(t.U, e.path);
}

function Ne(t, e) {
    var n = Ee(e);
    return g(n.get(1) === t.U.projectId), g(!n.get(3) && !t.U.database || n.get(3) === t.U.database), 
    new A(xe(n));
}

function Ae(t, e) {
    return Ie(t.U, e);
}

function De(t) {
    var e = Ee(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? E.g() : xe(e);
}

function Se(t) {
    return new E([ "projects", t.U.projectId, "databases", t.U.database ]).R();
}

function xe(t) {
    return g(t.length > 4 && "documents" === t.get(4)), t.u(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function ke(t, e, n) {
    return {
        name: Te(t, e),
        fields: n.proto.mapValue.fields
    };
}

function Le(t, e) {
    var n;
    if (e instanceof vn) n = {
        update: ke(t, e.key, e.value)
    }; else if (e instanceof bn) n = {
        delete: Te(t, e.key)
    }; else if (e instanceof yn) n = {
        update: ke(t, e.key, e.data),
        updateMask: Be(e.Qe)
    }; else if (e instanceof mn) n = {
        transform: {
            document: Te(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof Ye) return {
                        fieldPath: e.field.R(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof Xe) return {
                        fieldPath: e.field.R(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Je) return {
                        fieldPath: e.field.R(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof tn) return {
                        fieldPath: e.field.R(),
                        increment: n.We
                    };
                    throw y();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof In)) return y();
        n = {
            verify: Te(t, e.key)
        };
    }
    return e.Ke.je || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: _e(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : y();
    }(t, e.Ke)), n;
}

function Oe(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? un.updateTime(be(t.updateTime)) : void 0 !== t.exists ? un.exists(t.exists) : un.Ge();
    }(e.currentDocument) : un.Ge();
    if (e.update) {
        e.update.name;
        var r = Ne(t, e.update.name), i = new En({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var o = function(t) {
                var e = t.fieldPaths || [];
                return new rn(e.map((function(t) {
                    return N.S(t);
                })));
            }(e.updateMask);
            return new yn(r, i, o, n);
        }
        return new vn(r, i, n);
    }
    if (e.delete) {
        var s = Ne(t, e.delete);
        return new bn(s, n);
    }
    if (e.transform) {
        var u = Ne(t, e.transform.document), a = e.transform.fieldTransforms.map((function(e) {
            return function(t, e) {
                var n = null;
                if ("setToServerValue" in e) g("REQUEST_TIME" === e.setToServerValue), n = new Ye; else if ("appendMissingElements" in e) {
                    var r = e.appendMissingElements.values || [];
                    n = new Xe(r);
                } else if ("removeAllFromArray" in e) {
                    var i = e.removeAllFromArray.values || [];
                    n = new Je(i);
                } else "increment" in e ? n = new tn(t, e.increment) : y();
                var o = N.S(e.fieldPath);
                return new on(o, n);
            }(t, e);
        }));
        return g(!0 === n.exists), new mn(u, a);
    }
    if (e.verify) {
        var c = Ne(t, e.verify);
        return new In(c, n);
    }
    return y();
}

function Re(t, e) {
    return {
        documents: [ Ae(t, e.path) ]
    };
}

function Ue(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Ae(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Ae(t, r.h()), n.structuredQuery.from = [ {
        collectionId: r._()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (he(t.value)) return {
                            unaryFilter: {
                                field: qe(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (ce(t.value)) return {
                            unaryFilter: {
                                field: qe(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (he(t.value)) return {
                            unaryFilter: {
                                field: qe(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (ce(t.value)) return {
                            unaryFilter: {
                                field: qe(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: qe(t.field),
                            op: Me(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: qe(t.field),
                    direction: Ce(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.Ue || ut(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Pe(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Pe(e.endAt)), n;
}

function Pe(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function Ve(t) {
    var e = !!t.before, n = t.values || [];
    return new rr(n, e);
}

// visible for testing
function Ce(t) {
    return le[t];
}

function Me(t) {
    return pe[t];
}

function qe(t) {
    return {
        fieldPath: t.R()
    };
}

function Fe(t) {
    return N.S(t.fieldPath);
}

function je(t) {
    return Hn.create(Fe(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return y();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function ze(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = Fe(t.unaryFilter.field);
        return Hn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = Fe(t.unaryFilter.field);
        return Hn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = Fe(t.unaryFilter.field);
        return Hn.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = Fe(t.unaryFilter.field);
        return Hn.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return y();
    }
}

function Be(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.R());
    })), {
        fieldPaths: e
    };
}

function Ge(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Represents a transform within a TransformMutation. */ var We = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.ze = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Qe(t, e, n) {
    return t instanceof Ye ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof Xe ? Ze(t, e) : t instanceof Je ? $e(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = He(t, e), r = en(n) + en(t.We);
        return ue(n) && ue(t.We) ? ve(r) : ye(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Ke(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Xe ? Ze(t, e) : t instanceof Je ? $e(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function He(t, e) {
    return t instanceof tn ? ue(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Ye = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n;
}(We), Xe = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t.__extends(n, e), n;
}(We);

/** Transforms an array value via a union operation. */ function Ze(t, e) {
    for (var n = nn(e), r = function(t) {
        n.some((function(e) {
            return Jt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Je = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t.__extends(n, e), n;
}(We);

function $e(t, e) {
    for (var n = nn(e), r = function(t) {
        n = n.filter((function(e) {
            return !Jt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var tn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.We = n, r;
    }
    return t.__extends(n, e), n;
}(We);

function en(t) {
    return ie(t.integerValue || t.doubleValue);
}

function nn(t) {
    return ae(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var rn = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(N.i)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.He = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].T(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return Y(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), on = function(t, e) {
    this.field = t, this.transform = e;
};

/** A field path and the TransformOperation to perform upon it. */
/** The result of successfully applying a mutation to the backend. */ var sn = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, un = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.Ge = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "je", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function an(t, e) {
    return void 0 !== t.updateTime ? e instanceof Dn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Dn;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var cn = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function hn(t, e, n) {
    return t instanceof vn ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new Dn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof yn ? function(t, e, n) {
        if (!an(t.Ke, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new xn(t.key, n.version);
        var r = gn(t, e);
        return new Dn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof mn ? function(t, e, n) {
        if (g(null != n.transformResults), !an(t.Ke, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new xn(t.key, n.version);
        var r = wn(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param baseDoc The document prior to applying this mutation batch.
 * @param serverTransformResults The transform results received by the server.
 * @return The transform results list.
 */
        function(t, e, n) {
            var r = [];
            g(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], s = o.transform, u = null;
                e instanceof Dn && (u = e.field(o.field)), r.push(Ke(s, u, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, s = _n(t, r.data(), i);
        return new Dn(t.key, o, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Sn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function fn(t, e, n, r) {
    return t instanceof vn ? function(t, e) {
        if (!an(t.Ke, e)) return e;
        var n = dn(e);
        return new Dn(t.key, n, t.value, {
            Ye: !0
        });
    }(t, e) : t instanceof yn ? function(t, e) {
        if (!an(t.Ke, e)) return e;
        var n = dn(e), r = gn(t, e);
        return new Dn(t.key, n, r, {
            Ye: !0
        });
    }(t, e) : t instanceof mn ? function(t, e, n, r) {
        if (!an(t.Ke, e)) return e;
        var i = wn(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
                var u = s[o], a = u.transform, c = null;
                n instanceof Dn && (c = n.field(u.field)), null === c && r instanceof Dn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                c = r.field(u.field)), i.push(Qe(a, c, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), s = _n(t, i.data(), o);
        return new Dn(t.key, i.version, s, {
            Ye: !0
        });
    }(t, e, r, n) : function(t, e) {
        return an(t.Ke, e) ? new Sn(t.key, st.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function ln(t, e) {
    return t instanceof mn ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof Dn ? e.field(o.field) : void 0, u = He(o.transform, s || null);
            null != u && (n = null == n ? (new Tn).set(o.field, u) : n.set(o.field, u));
        }
        return n ? n.Je() : null;
    }(t, e) : null;
}

function pn(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ke.isEqual(e.Ke) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : 2 /* Transform */ !== t.type || Y(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof Xe && e instanceof Xe || t instanceof Je && e instanceof Je ? Y(t.elements, e.elements, Jt) : t instanceof tn && e instanceof tn ? Jt(t.We, e.We) : t instanceof Ye && e instanceof Ye;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function dn(t) {
    return t instanceof Dn ? t.version : st.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var vn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Ke = r, i.type = 0 /* Set */ , 
        i;
    }
    return t.__extends(n, e), n;
}(cn), yn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.Qe = r, o.Ke = i, o.type = 1 /* Patch */ , 
        o;
    }
    return t.__extends(n, e), n;
}(cn);

function gn(t, e) {
    return function(t, e) {
        var n = new Tn(e);
        return t.Qe.fields.forEach((function(e) {
            if (!e.m()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.Je();
    }(t, e instanceof Dn ? e.data() : En.empty());
}

var mn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ke = un.exists(!0), r;
    }
    return t.__extends(n, e), n;
}(cn);

function wn(t, e) {
    return e;
}

function _n(t, e, n) {
    for (var r = new Tn(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.Je();
}

/** A mutation that deletes the document at the given key. */ var bn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ke = n, r.type = 3 /* Delete */ , r;
    }
    return t.__extends(n, e), n;
}(cn), In = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ke = n, r.type = 4 /* Verify */ , r;
    }
    return t.__extends(n, e), n;
}(cn), En = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.m()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!fe(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t._()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Jt(this.proto, t.proto);
    }, t;
}(), Tn = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = En.empty()), this.Xe = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ze = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.tn(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.tn(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.tn = function(t, e) {
        for (var n = this.Ze, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === Zt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t._(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.Je = function() {
        var t = this.en(N.g(), this.Ze);
        return null != t ? new En(t) : this.Xe;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.en = function(t, e) {
        var n = this, r = !1, i = this.Xe.field(t), o = fe(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.en(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function Nn(t) {
    var e = [];
    return _(t.fields || {}, (function(t, n) {
        var r = new N([ t ]);
        if (fe(n)) {
            var i = Nn(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new rn(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var An = function(t, e) {
    this.key = t, this.version = e;
}, Dn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).nn = r, o.Ye = !!i.Ye, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return t.__extends(n, e), n.prototype.field = function(t) {
        return this.nn.field(t);
    }, n.prototype.data = function() {
        return this.nn;
    }, n.prototype.sn = function() {
        return this.nn.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ye === t.Ye && this.hasCommittedMutations === t.hasCommittedMutations && this.nn.isEqual(t.nn);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.nn.toString() + ", {hasLocalMutations: " + this.Ye + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.Ye || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(An), Sn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return t.__extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(An), xn = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(An), kn = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , s, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
    void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.rn = n, 
    this.filters = r, this.limit = i, this.on = o, this.startAt = s, this.endAt = u, 
    this.an = null, 
    // The corresponding `Target` of this `Query` instance.
    this.cn = null, this.startAt, this.endAt;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/** Creates a new Query instance with the options provided. */ function Ln(t, e, n, r, i, o, s, u) {
    return new kn(t, e, n, r, i, o, s, u);
}

/** Creates a new Query for a query that matches all documents at `path` */ function On(t) {
    return new kn(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Rn(t) {
    return !ut(t.limit) && "F" /* First */ === t.on;
}

function Un(t) {
    return !ut(t.limit) && "L" /* Last */ === t.on;
}

function Pn(t) {
    return t.rn.length > 0 ? t.rn[0].field : null;
}

function Vn(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.un()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function Cn(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Mn(t) {
    var e = m(t);
    if (null === e.an) {
        e.an = [];
        var n = Vn(e), r = Pn(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.p() || e.an.push(new ur(n)), e.an.push(new ur(N.v(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, s = e.rn; o < s.length; o++) {
                var u = s[o];
                e.an.push(u), u.field.p() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.rn.length > 0 ? e.rn[e.rn.length - 1].dir : "asc" /* ASCENDING */;
                e.an.push(new ur(N.v(), a));
            }
        }
    }
    return e.an;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function qn(t) {
    var e = m(t);
    if (!e.cn) if ("F" /* First */ === e.on) e.cn = ft(e.path, e.collectionGroup, Mn(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = Mn(e); r < i.length; r++) {
            var o = i[r], s = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new ur(o.field, s));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var u = e.endAt ? new rr(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new rr(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.cn = ft(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
    }
    return e.cn;
}

function Fn(t, e, n) {
    return new kn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function jn(t, e) {
    return new kn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, e, t.endAt);
}

function zn(t, e) {
    return new kn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, e);
}

function Bn(t, e) {
    return pt(qn(t), qn(e)) && t.on === e.on;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Gn(t) {
    return lt(qn(t)) + "|lt:" + t.on;
}

function Wn(t) {
    return "Query(target=" + function(t) {
        var e = t.path.R();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.R() + " " + e.op + " " + ne(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        ut(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return (e = t).field.R() + " (" + e.dir + ")";
            var e;
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + ir(t.startAt)), t.endAt && (e += ", endAt: " + ir(t.endAt)), 
        "Target(" + e + ")";
    }(qn(t)) + "; limitType=" + t.on + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function Qn(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.N(t.collectionGroup) && t.path.T(n) : A.F(t.path) ? t.path.isEqual(n) : t.path.I(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.rn; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.p() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !or(t.startAt, Mn(t), e)) && (!t.endAt || !or(t.endAt, Mn(t), e));
    }(t, e);
}

function Kn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = Mn(t); i < o.length; i++) {
            var s = o[i], u = ar(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.p();
        }
        return 0;
    };
}

var Hn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return t.__extends(n, e), n.create = function(t, e, r) {
        if (t.p()) return "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.hn(t, e, r) : new Yn(t, e, r);
        if (ce(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) throw new c(a.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
            return new n(t, e, r);
        }
        if (he(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) throw new c(a.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new $n(t, r) : "in" /* IN */ === e ? new tr(t, r) : "not-in" /* NOT_IN */ === e ? new er(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new nr(t, r) : new n(t, e, r);
    }, n.hn = function(t, e, n) {
        return "in" /* IN */ === e ? new Xn(t, n) : new Zn(t, n);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.ln(te(e, this.value)) : null !== e && Zt(this.value) === Zt(e) && this.ln(te(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, n.prototype.ln = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return y();
        }
    }, n.prototype.un = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var Yn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = A.C(r.referenceValue), i;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = A.i(t.key, this.key);
        return this.ln(e);
    }, n;
}(Hn), Xn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = Jn("in" /* IN */ , n), 
        r;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Hn), Zn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in" /* NOT_IN */ , n) || this).keys = Jn("not-in" /* NOT_IN */ , n), 
        r;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Hn);

/** Filter that matches on key fields within an array. */ function Jn(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return A.C(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var $n = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return ae(e) && $t(e.arrayValue, this.value);
    }, n;
}(Hn), tr = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && $t(this.value.arrayValue, e);
    }, n;
}(Hn), er = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "not-in" /* NOT_IN */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        if ($t(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.field(this.field);
        return null !== e && !$t(this.value.arrayValue, e);
    }, n;
}(Hn), nr = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!ae(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return $t(e.value.arrayValue, t);
        }));
    }, n;
}(Hn), rr = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function ir(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return ne(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function or(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.p() ? A.i(A.C(s.referenceValue), n.key) : te(s, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function sr(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Jt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var ur = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function ar(t, e, n) {
    var r = t.field.p() ? A.i(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? te(r, i) : y();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return y();
    }
}

function cr(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var hr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, fr = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this._n = t, this.fn = e, this.dn = n, this.wn = r, this.mn = i, this.Tn = 0, this.En = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.In = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Tn = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.An = function() {
        this.Tn = this.mn;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Rn = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Tn + this.Pn()), r = Math.max(0, Date.now() - this.In), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && l("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Tn + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.En = this._n.gn(this.fn, i, (function() {
            return e.In = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Tn *= this.wn, this.Tn < this.dn && (this.Tn = this.dn), this.Tn > this.mn && (this.Tn = this.mn);
    }, t.prototype.yn = function() {
        null !== this.En && (this.En.Vn(), this.En = null);
    }, t.prototype.cancel = function() {
        null !== this.En && (this.En.cancel(), this.En = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Pn = function() {
        return (Math.random() - .5) * this.Tn;
    }, t;
}(), lr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.pn = null, this.bn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.vn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Sn = !1, t((function(t) {
            e.vn = !0, e.result = t, e.pn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.pn(t);
        }), (function(t) {
            e.vn = !0, e.error = t, e.bn && e.bn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Sn && y(), this.Sn = !0, this.vn ? this.error ? this.Dn(n, this.error) : this.Cn(e, this.result) : new t((function(t, i) {
            r.pn = function(n) {
                r.Cn(e, n).next(t, i);
            }, r.bn = function(e) {
                r.Dn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Nn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Fn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Cn = function(e, n) {
        return e ? this.Fn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.Dn = function(e, n) {
        return e ? this.Fn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.xn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.$n = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.xn(r);
    }, t;
}(), pr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function e(t, n, i) {
        this.name = t, this.version = n, this.kn = i, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === e.Mn(r.getUA()) && p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return e.delete = function(t) {
        return l("SimpleDb", "Removing database:", t), wr(window.indexedDB.deleteDatabase(t)).Nn();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ e.On = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (e.Ln()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var t = r.getUA(), n = e.Mn(t), i = 0 < n && n < 10, o = e.Bn(t), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || i || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    e.Ln = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.qn);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ e.Un = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    e.Mn = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    e.Bn = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    e.prototype.Qn = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (l("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(t, e) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var r = indexedDB.open(n.name, n.version);
                        r.onsuccess = function(e) {
                            var n = e.target.result;
                            t(n);
                        }, r.onblocked = function() {
                            e(new vr("Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, r.onerror = function(t) {
                            var n = t.target.error;
                            "VersionError" === n.name ? e(new c(a.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : e(new vr(n));
                        }, r.onupgradeneeded = function(t) {
                            l("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.kn.createOrUpgrade(e, r.transaction, t.oldVersion, n.version).next((function() {
                                l("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.Wn && (this.db.onversionchange = function(t) {
                        return n.Wn(t);
                    }), this.db) ];
                }
            }));
        }));
    }, e.prototype.jn = function(t) {
        this.Wn = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, e.prototype.runTransaction = function(e, n, r) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return t.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === e, o = 0, s = function() {
                        var e, s, a, c, h;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                ++o, t.label = 1;

                              case 1:
                                return t.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , u.Qn() ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.db = t.sent(), e = gr.open(u.db, i ? "readonly" : "readwrite", n), s = r(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), lr.reject(t);
                                })).Nn(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , e.Kn ];

                              case 3:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                t.sent(), s), a) ];

                              case 4:
                                return c = t.sent(), h = "FirebaseError" !== c.name && o < 3, l("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", h), 
                                u.close(), h ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, e;
}(), dr = /** @class */ function() {
    function t(t) {
        this.Gn = t, this.zn = !1, this.Hn = null;
    }
    return Object.defineProperty(t.prototype, "vn", {
        get: function() {
            return this.zn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Yn", {
        get: function() {
            return this.Hn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.Gn = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.zn = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Jn = function(t) {
        this.Hn = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return wr(this.Gn.delete());
    }, t;
}(), vr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, a.UNAVAILABLE, "IndexedDB transaction failed: " + t) || this).name = "IndexedDbTransactionError", 
        n;
    }
    return t.__extends(n, e), n;
}(c);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function yr(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ var gr = /** @class */ function() {
    function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Xn = new hr, this.transaction.oncomplete = function() {
            e.Xn.resolve();
        }, this.transaction.onabort = function() {
            t.error ? e.Xn.reject(new vr(t.error)) : e.Xn.resolve();
        }, this.transaction.onerror = function(t) {
            var n = br(t.target.error);
            e.Xn.reject(new vr(n));
        };
    }
    return t.open = function(e, n, r) {
        try {
            return new t(e.transaction(r, n));
        } catch (e) {
            throw new vr(e);
        }
    }, Object.defineProperty(t.prototype, "Kn", {
        get: function() {
            return this.Xn.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.Xn.reject(t), this.aborted || (l("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new mr(e);
    }, t;
}(), mr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (l("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (l("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), wr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return l("SimpleDb", "ADD", this.store.name, t, t), wr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return wr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), l("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return l("SimpleDb", "DELETE", this.store.name, t), wr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return l("SimpleDb", "COUNT", this.store.name), wr(this.store.count());
    }, t.prototype.Zn = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.ts(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.es = function(t, e) {
        l("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.ns = !1;
        var r = this.cursor(n);
        return this.ts(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.ss = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.ts(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.rs = function(t) {
        var e = this.cursor({});
        return new lr((function(n, r) {
            e.onerror = function(t) {
                var e = br(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.ts = function(t, e) {
        var n = [];
        return new lr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new dr(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof lr) {
                        var u = s.catch((function(t) {
                            return o.done(), lr.reject(t);
                        }));
                        n.push(u);
                    }
                    o.vn ? r() : null === o.Yn ? i.continue() : i.continue(o.Yn);
                } else r();
            };
        })).next((function() {
            return lr.xn(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.ns ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function wr(t) {
    return new lr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = br(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var _r = !1;

function br(t) {
    var e = pr.Mn(r.getUA());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var i = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return _r || (_r = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw i;
            }), 0)), i;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */ function Ir() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Er() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var Tr = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.os = t, this.fn = e, this.cs = n, this.op = r, this.us = i, this.hs = new hr, 
        this.then = this.hs.promise.then.bind(this.hs.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.hs.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.ls = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this._s = setTimeout((function() {
            return e.fs();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Vn = function() {
        return this.fs();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this._s && (this.clearTimeout(), this.hs.reject(new c(a.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.fs = function() {
        var t = this;
        this.os.ds((function() {
            return null !== t._s ? (t.clearTimeout(), t.op().then((function(e) {
                return t.hs.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this._s && (this.us(this), clearTimeout(this._s), this._s = null);
    }, t;
}(), Nr = /** @class */ function() {
    function e() {
        var t = this;
        // The last promise in the queue.
                this.ws = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Ts = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Es = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Is = [], 
        // visible for testing
        this.As = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Rs = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Ps = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.gs = new fr(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ys = function() {
            var e = Er();
            e && l("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.gs.yn();
        };
        var e = Er();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ys);
    }
    return Object.defineProperty(e.prototype, "Vs", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Es;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    e.prototype.ds = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    e.prototype.ps = function(t) {
        this.bs(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.vs(t);
    }, 
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */
    e.prototype.Ss = function() {
        if (!this.Es) {
            this.Es = !0;
            var t = Er();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.ys);
        }
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    e.prototype.enqueue = function(t) {
        return this.bs(), this.Es ? new Promise((function(t) {})) : this.vs(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    e.prototype.Ds = function(t) {
        var e = this;
        this.Ts.push(t), this.ds((function() {
            return e.Cs();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    e.prototype.Cs = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    if (0 === this.Ts.length) return [ 3 /*break*/ , 5 ];
                    t.label = 1;

                  case 1:
                    return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Ts[0]() ];

                  case 2:
                    return t.sent(), this.Ts.shift(), this.gs.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!yr(e = t.sent())) throw e;
                    // Failure will be handled by AsyncQueue
                                        return l("AsyncQueue", "Operation failed with retryable error: " + e), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Ts.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.gs.Rn((function() {
                        return n.Cs();
                    })), t.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.vs = function(t) {
        var e = this, n = this.ws.then((function() {
            return e.Rs = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.As = t, e.Rs = !1, p("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Rs = !1, t;
            }));
        }));
        return this.ws = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    e.prototype.gn = function(t, e, n) {
        var r = this;
        this.bs(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Ps.indexOf(t) > -1 && (e = 0);
        var i = Tr.ls(this, t, e, n, (function(t) {
            return r.Ns(t);
        }));
        return this.Is.push(i), i;
    }, e.prototype.bs = function() {
        this.As && y();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    e.prototype.Fs = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    e.prototype.xs = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , e = this.ws ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    if (e !== this.ws) return [ 3 /*break*/ , 0 ];
                    t.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    e.prototype.$s = function(t) {
        for (var e = 0, n = this.Is; e < n.length; e++) {
            if (n[e].fn === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    e.prototype.ks = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.xs().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Is.sort((function(t, e) {
                return t.cs - e.cs;
            }));
            for (var n = 0, r = e.Is; n < r.length; n++) {
                var i = r[n];
                if (i.Vn(), "all" /* All */ !== t && i.fn === t) break;
            }
            return e.xs();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    e.prototype.Ms = function(t) {
        this.Ps.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ e.prototype.Ns = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Is.indexOf(t);
        this.Is.splice(e, 1);
    }, e;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Ar(t, e) {
    if (p("AsyncQueue", e + ": " + t), yr(t)) return new c(a.UNAVAILABLE, e + ": " + t);
    throw t;
}

var Dr = function() {
    this.Os = void 0, this.listeners = [];
}, Sr = function() {
    this.Ls = new it((function(t) {
        return Gn(t);
    }), Bn), this.onlineState = "Unknown" /* Unknown */ , this.Bs = new Set;
};

function xr(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                if (r = m(e), i = n.query, o = !1, (s = r.Ls.get(i)) || (o = !0, s = new Dr), !o) return [ 3 /*break*/ , 4 ];
                t.label = 1;

              case 1:
                return t.trys.push([ 1, 3, , 4 ]), u = s, [ 4 /*yield*/ , r.qs(i) ];

              case 2:
                return u.Os = t.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return a = t.sent(), c = Ar(a, "Initialization of query '" + Wn(n.query) + "' failed"), 
                [ 2 /*return*/ , void n.onError(c) ];

              case 4:
                return r.Ls.set(i, s), s.listeners.push(n), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                n.Us(r.onlineState), s.Os && n.Qs(s.Os) && Rr(r), [ 2 /*return*/ ];
            }
        }));
    }));
}

function kr(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u;
        return t.__generator(this, (function(t) {
            return r = m(e), i = n.query, o = !1, (s = r.Ls.get(i)) && (u = s.listeners.indexOf(n)) >= 0 && (s.listeners.splice(u, 1), 
            o = 0 === s.listeners.length), o ? [ 2 /*return*/ , (r.Ls.delete(i), r.Ws(i)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function Lr(t, e) {
    for (var n = m(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var s = o[i], u = s.query, a = n.Ls.get(u);
        if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
                h[c].Qs(s) && (r = !0);
            }
            a.Os = s;
        }
    }
    r && Rr(n);
}

function Or(t, e, n) {
    var r = m(t), i = r.Ls.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
        s[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.Ls.delete(e);
}

// Call all global snapshot listeners that have been set.
function Rr(t) {
    t.Bs.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var Ur = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.js = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Ks = !1, this.Gs = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Qs = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new Mt(t.query, t.docs, t.Ut, e, t.Qt, t.fromCache, t.Wt, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Ks ? this.zs(t) && (this.js.next(t), o = !0) : this.Hs(t, this.onlineState) && (this.Ys(t), 
        o = !0), this.Gs = t, o;
    }, t.prototype.onError = function(t) {
        this.js.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Us = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Gs && !this.Ks && this.Hs(this.Gs, t) && (this.Ys(this.Gs), e = !0), 
        e;
    }, t.prototype.Hs = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Js && n || t.docs.m() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.zs = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Gs && this.Gs.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Wt && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Ys = function(t) {
        t = Mt.Kt(t.query, t.docs, t.Qt, t.fromCache), this.Ks = !0, this.js.next(t);
    }, t;
}(), Pr = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.Xs = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.Zs = function() {
        return this.Xs() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ Pr.UNAUTHENTICATED = new Pr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Pr.ti = new Pr("google-credentials-uid"), Pr.ei = new Pr("first-party-uid");

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */
var Vr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.ni = function(t) {
            return n.si(t);
        }, this.ii = function(t) {
            return e.ri(t);
        });
    }
    return t.prototype.si = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.ii && this.ii(t), t;
    }, t;
}();

/** Assembles the key for a client state in WebStorage */
function Cr(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function Mr(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.Xs() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function qr(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
Vr.oi = -1;

var Fr = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, s) : (p("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.ci = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), jr = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (p("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.ci = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), zr = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Pt(), s = 0; i && s < r.activeTargetIds.length; ++s) i = ct(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (p("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Br = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (p("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), Gr = /** @class */ function() {
    function t() {
        this.activeTargetIds = Pt();
    }
    return t.prototype.ui = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.hi = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.ci = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.A(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Wr = /** @class */ function() {
    function e(t, e, n, r, i) {
        this.window = t, this._n = e, this.persistenceKey = n, this.li = r, this._i = null, 
        this.fi = null, this.ni = null, this.di = this.wi.bind(this), this.mi = new bt(H), 
        this.Ti = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Ei = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Ii = Cr(this.persistenceKey, this.li), 
        this.Ai = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.mi = this.mi.rt(this.li, new Gr), this.Ri = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.gi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.yi = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.di);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return e.On = function(t) {
        return !(!t || !t.localStorage);
    }, e.prototype.start = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n, r, i, o, s, u, a, c, h, f, l = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._i.Vi() ];

                  case 1:
                    for (e = t.sent(), n = 0, r = e; n < r.length; n++) (i = r[n]) !== this.li && (o = this.getItem(Cr(this.persistenceKey, i))) && (s = zr.ai(i, o)) && (this.mi = this.mi.rt(s.clientId, s));
                    for (this.pi(), (u = this.storage.getItem(this.yi)) && (a = this.bi(u)) && this.vi(a), 
                    c = 0, h = this.Ei; c < h.length; c++) f = h[c], this.wi(f);
                    return this.Ei = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return l.Si();
                    })), this.Ti = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.ri = function(t) {
        this.setItem(this.Ai, JSON.stringify(t));
    }, e.prototype.Di = function() {
        return this.Ci(this.mi);
    }, e.prototype.Ni = function(t) {
        var e = !1;
        return this.mi.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, e.prototype.Fi = function(t) {
        this.xi(t, "pending");
    }, e.prototype.$i = function(t, e, n) {
        this.xi(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.ki(t);
    }, e.prototype.Mi = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Ni(t)) {
            var n = this.storage.getItem(qr(this.persistenceKey, t));
            if (n) {
                var r = jr.ai(t, n);
                r && (e = r.state);
            }
        }
        return this.Oi.ui(t), this.pi(), e;
    }, e.prototype.Li = function(t) {
        this.Oi.hi(t), this.pi();
    }, e.prototype.Bi = function(t) {
        return this.Oi.activeTargetIds.has(t);
    }, e.prototype.qi = function(t) {
        this.removeItem(qr(this.persistenceKey, t));
    }, e.prototype.Ui = function(t, e, n) {
        this.Qi(t, e, n);
    }, e.prototype.Wi = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.ki(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.Fi(t);
        }));
    }, e.prototype.ji = function(t) {
        this.Ki(t);
    }, e.prototype.Si = function() {
        this.Ti && (this.window.removeEventListener("storage", this.di), this.removeItem(this.Ii), 
        this.Ti = !1);
    }, e.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return l("SharedClientState", "READ", t, e), e;
    }, e.prototype.setItem = function(t, e) {
        l("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, e.prototype.removeItem = function(t) {
        l("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, e.prototype.wi = function(e) {
        var n = this, r = e;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (r.storageArea === this.storage) {
            if (l("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Ii) return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this._n.Ds((function() {
                return t.__awaiter(n, void 0, void 0, (function() {
                    var e, n, i, o, s, u;
                    return t.__generator(this, (function(t) {
                        if (this.Ti) {
                            if (null !== r.key) if (this.Ri.test(r.key)) {
                                if (null == r.newValue) return e = this.Gi(r.key), [ 2 /*return*/ , this.zi(e, null) ];
                                if (n = this.Hi(r.key, r.newValue)) return [ 2 /*return*/ , this.zi(n.clientId, n) ];
                            } else if (this.Pi.test(r.key)) {
                                if (null !== r.newValue && (i = this.Yi(r.key, r.newValue))) return [ 2 /*return*/ , this.Ji(i) ];
                            } else if (this.gi.test(r.key)) {
                                if (null !== r.newValue && (o = this.Xi(r.key, r.newValue))) return [ 2 /*return*/ , this.Zi(o) ];
                            } else if (r.key === this.yi) {
                                if (null !== r.newValue && (s = this.bi(r.newValue))) return [ 2 /*return*/ , this.vi(s) ];
                            } else r.key === this.Ai && (u = function(t) {
                                var e = Vr.oi;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    g("number" == typeof n), e = n;
                                } catch (t) {
                                    p("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(r.newValue)) !== Vr.oi && this.ni(u);
                        } else this.Ei.push(r);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(e.prototype, "Oi", {
        get: function() {
            return this.mi.get(this.li);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.pi = function() {
        this.setItem(this.Ii, this.Oi.ci());
    }, e.prototype.xi = function(t, e, n) {
        var r = new Fr(this.currentUser, t, e, n), i = Mr(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.ci());
    }, e.prototype.ki = function(t) {
        var e = Mr(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, e.prototype.Ki = function(t) {
        var e = {
            clientId: this.li,
            onlineState: t
        };
        this.storage.setItem(this.yi, JSON.stringify(e));
    }, e.prototype.Qi = function(t, e, n) {
        var r = qr(this.persistenceKey, t), i = new jr(t, e, n);
        this.setItem(r, i.ci());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    e.prototype.Gi = function(t) {
        var e = this.Ri.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    e.prototype.Hi = function(t, e) {
        var n = this.Gi(t);
        return zr.ai(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.Yi = function(t, e) {
        var n = this.Pi.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return Fr.ai(new Pr(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.Xi = function(t, e) {
        var n = this.gi.exec(t), r = Number(n[1]);
        return jr.ai(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.bi = function(t) {
        return Br.ai(t);
    }, e.prototype.Ji = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                return e.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this._i.tr(e.batchId, e.state, e.error) ] : (l("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, e.prototype.Zi = function(t) {
        return this._i.er(t.targetId, t.state, t.error);
    }, e.prototype.zi = function(t, e) {
        var n = this, r = e ? this.mi.rt(t, e) : this.mi.remove(t), i = this.Ci(this.mi), o = this.Ci(r), s = [], u = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || u.push(t);
        })), this._i.nr(s, u).then((function() {
            n.mi = r;
        }));
    }, e.prototype.vi = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.mi.get(t.clientId) && this.fi(t.onlineState);
    }, e.prototype.Ci = function(t) {
        var e = Pt();
        return t.forEach((function(t, n) {
            e = e.$t(n.activeTargetIds);
        })), e;
    }, e;
}(), Qr = /** @class */ function() {
    function t() {
        this.sr = new Gr, this.ir = {}, this.fi = null, this.ni = null;
    }
    return t.prototype.Fi = function(t) {
        // No op.
    }, t.prototype.$i = function(t, e, n) {
        // No op.
    }, t.prototype.Mi = function(t) {
        return this.sr.ui(t), this.ir[t] || "not-current";
    }, t.prototype.Ui = function(t, e, n) {
        this.ir[t] = e;
    }, t.prototype.Li = function(t) {
        this.sr.hi(t);
    }, t.prototype.Bi = function(t) {
        return this.sr.activeTargetIds.has(t);
    }, t.prototype.qi = function(t) {
        delete this.ir[t];
    }, t.prototype.Di = function() {
        return this.sr.activeTargetIds;
    }, t.prototype.Ni = function(t) {
        return this.sr.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.sr = new Gr, Promise.resolve();
    }, t.prototype.Wi = function(t, e, n) {
        // No op.
    }, t.prototype.ji = function(t) {
        // No op.
    }, t.prototype.Si = function() {}, t.prototype.ri = function(t) {}, t;
}(), Kr = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.rr = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.ar = function(t, e, n) {
        for (var r = n.cr, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = hn(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.ur = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = fn(i, e, e, this.rr));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = fn(a, e, o, this.rr));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.hr = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.ur(r.key, t.get(r.key));
            i && (n = n.rt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), Rt());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Y(this.mutations, t.mutations, (function(t, e) {
            return pn(t, e);
        })) && Y(this.baseMutations, t.baseMutations, (function(t, e) {
            return pn(t, e);
        }));
    }, t;
}(), Hr = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.lr = e, this.cr = n, this._r = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        g(e.mutations.length === r.length);
        for (var i = Lt, o = e.mutations, s = 0; s < o.length; s++) i = i.rt(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Yr = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.dr = new it((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.wr = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.mr;
        },
        set: function(t) {
            this.mr = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Tr = function(t, e) {
        this.Er(), this.readTime = e, this.dr.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Ir = function(t, e) {
        this.Er(), e && (this.readTime = e), this.dr.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.Ar = function(t, e) {
        this.Er();
        var n = this.dr.get(e);
        return void 0 !== n ? lr.resolve(n) : this.Rr(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.Pr(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Er(), this.wr = !0, this.gr(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Er = function() {}, 
    t;
}(), Xr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Zr = /** @class */ function() {
    function t() {
        this.yr = [];
    }
    return t.prototype.Vr = function(t) {
        this.yr.push(t);
    }, t.prototype.pr = function() {
        this.yr.forEach((function(t) {
            return t();
        }));
    }, t;
}(), Jr = /** @class */ function() {
    function t(t, e, n) {
        this.br = t, this.vr = e, this.Sr = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Dr = function(t, e) {
        var n = this;
        return this.vr.Cr(t, e).next((function(r) {
            return n.Nr(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Nr = function(t, e, n) {
        return this.br.Ar(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].ur(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Fr = function(t, e, n) {
        var r = St();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].ur(t, e);
            }
            r = r.rt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.$r = function(t, e) {
        var n = this;
        return this.br.getEntries(t, e).next((function(e) {
            return n.kr(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.kr = function(t, e) {
        var n = this;
        return this.vr.Mr(t, e).next((function(r) {
            var i = n.Fr(t, e, r), o = Dt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Sn(t, st.min())), o = o.rt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Or = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Lr(t, e.path) : Cn(e) ? this.Br(t, e, n) : this.qr(t, e, n);
    }, t.prototype.Lr = function(t, e) {
        // Just do a simple document lookup.
        return this.Dr(t, new A(e)).next((function(t) {
            var e = kt();
            return t instanceof Dn && (e = e.rt(t.key, t)), e;
        }));
    }, t.prototype.Br = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = kt();
        return this.Sr.Ur(t, i).next((function(s) {
            return lr.forEach(s, (function(s) {
                var u = function(t, e) {
                    return new kn(e, 
                    /*collectionGroup=*/ null, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, t.endAt);
                }(e, s.child(i));
                return r.qr(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.rt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.qr = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.br.Or(t, e, n).next((function(n) {
            return r = n, o.vr.Qr(t, e);
        })).next((function(e) {
            return i = e, o.Wr(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], c = a.key, h = r.get(c), f = fn(a, h, h, o.rr);
                    r = f instanceof Dn ? r.rt(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                Qn(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Wr = function(t, e, n) {
        for (var r = Rt(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof yn && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.br.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof Dn && (c = c.rt(t, e));
            })), c;
        }));
    }, t;
}(), $r = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.jr = n, this.Kr = r;
    }
    return t.Gr = function(e, n) {
        for (var r = Rt(), i = Rt(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}();

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = H(n, i);
    return 0 === s ? H(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var ei = /** @class */ function() {
    function t(t) {
        this.zr = t, this.buffer = new Tt(ti), this.Hr = 0;
    }
    return t.prototype.Yr = function() {
        return ++this.Hr;
    }, t.prototype.Jr = function(t) {
        var e = [ t, this.Yr() ];
        if (this.buffer.size < this.zr) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            ti(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), ni = {
    Xr: !1,
    Zr: 0,
    eo: 0,
    no: 0
}, ri = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.so = t, this.io = e, this.ro = n;
    }
    return t.oo = function(e) {
        return new t(e, t.ao, t.co);
    }, t;
}();

ri.uo = -1, ri.ho = 1048576, ri.lo = 41943040, ri.ao = 10, ri.co = 1e3, ri._o = new ri(ri.lo, ri.ao, ri.co), 
ri.fo = new ri(ri.uo, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
var ii = /** @class */ function() {
    function e(t, e) {
        this.do = t, this.os = e, this.wo = !1, this.mo = null;
    }
    return e.prototype.start = function(t) {
        this.do.params.so !== ri.uo && this.To(t);
    }, e.prototype.stop = function() {
        this.mo && (this.mo.cancel(), this.mo = null);
    }, Object.defineProperty(e.prototype, "Ti", {
        get: function() {
            return null !== this.mo;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.To = function(e) {
        var n = this, r = this.wo ? 3e5 : 6e4;
        l("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.mo = this.os.gn("lru_garbage_collection" /* LruGarbageCollection */ , r, (function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                var n;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        this.mo = null, this.wo = !0, t.label = 1;

                      case 1:
                        return t.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , e.Eo(this.do) ];

                      case 2:
                        return t.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return yr(n = t.sent()) ? (l("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , bo(n) ];

                      case 5:
                        t.sent(), t.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.To(e) ];

                      case 8:
                        return t.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, e;
}(), oi = /** @class */ function() {
    function t(t, e) {
        this.Io = t, this.params = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */;
    }
    return t.prototype.Ao = function(t, e) {
        return this.Io.Ro(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */ t.prototype.Po = function(t, e) {
        var n = this;
        if (0 === e) return lr.resolve(Vr.oi);
        var r = new ei(e);
        return this.Io.De(t, (function(t) {
            return r.Jr(t.sequenceNumber);
        })).next((function() {
            return n.Io.yo(t, (function(t) {
                return r.Jr(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.Vo = function(t, e, n) {
        return this.Io.Vo(t, e, n);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.po = function(t, e) {
        return this.Io.po(t, e);
    }, t.prototype.bo = function(t, e) {
        var n = this;
        return this.params.so === ri.uo ? (l("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        lr.resolve(ni)) : this.vo(t).next((function(r) {
            return r < n.params.so ? (l("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.so), 
            ni) : n.So(t, e);
        }));
    }, t.prototype.vo = function(t) {
        return this.Io.vo(t);
    }, t.prototype.So = function(t, e) {
        var r, i, o, s, u, a, c, h = this, p = Date.now();
        return this.Ao(t, this.params.io).next((function(e) {
            // Cap at the configured max
            return e > h.params.ro ? (l("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.ro + " from " + e), 
            i = h.params.ro) : i = e, s = Date.now(), h.Po(t, i);
        })).next((function(n) {
            return r = n, u = Date.now(), h.Vo(t, r, e);
        })).next((function(e) {
            return o = e, a = Date.now(), h.po(t, r);
        })).next((function(t) {
            return c = Date.now(), f() <= n.LogLevel.DEBUG && l("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - p) + "ms"), 
            lr.resolve({
                Xr: !0,
                Zr: i,
                eo: o,
                no: t
            });
        }));
    }, t;
}();

/** Implements the steps for LRU garbage collection. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function si(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = ai(e)), e = ui(t.get(n), e);
    return ai(e);
}

/** Encodes a single segment of a resource path into the given result */ function ui(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function ai(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function ci(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (g(e >= 2), 2 === e) return g("" === t.charAt(0) && "" === t.charAt(1)), E.g();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && y(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            y();
        }
        o = s + 2;
    }
    return new E(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var hi = function(t) {
    this.Do = t;
};

/** Decodes a remote document from storage locally to a Document. */ function fi(t, e) {
    if (e.document) return function(t, e, n) {
        var r = Ne(t, e.name), i = be(e.updateTime), o = new En({
            mapValue: {
                fields: e.fields
            }
        });
        return new Dn(r, i, o, {
            hasCommittedMutations: !!n
        });
    }(t.Do, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = A.$(e.noDocument.path), r = yi(e.noDocument.readTime);
        return new Sn(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        var i = A.$(e.unknownDocument.path), o = yi(e.unknownDocument.version);
        return new xn(i, o);
    }
    return y();
}

/** Encodes a document for storage locally. */ function li(t, e, n) {
    var r = pi(n), i = e.key.path.h().A();
    if (e instanceof Dn) {
        var o = function(t, e) {
            return {
                name: Te(t, e.key),
                fields: e.sn().mapValue.fields,
                updateTime: me(t, e.version.X())
            };
        }(t.Do, e), s = e.hasCommittedMutations;
        return new ji(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, s, r, i);
    }
    if (e instanceof Sn) {
        var u = e.key.path.A(), a = vi(e.version), c = e.hasCommittedMutations;
        return new ji(
        /* unknownDocument= */ null, new qi(u, a), 
        /* document= */ null, c, r, i);
    }
    if (e instanceof xn) {
        var h = e.key.path.A(), f = vi(e.version);
        return new ji(new Fi(h, f), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return y();
}

function pi(t) {
    var e = t.X();
    return [ e.seconds, e.nanoseconds ];
}

function di(t) {
    var e = new ot(t[0], t[1]);
    return st.Y(e);
}

function vi(t) {
    var e = t.X();
    return new Ui(e.seconds, e.nanoseconds);
}

function yi(t) {
    var e = new ot(t.seconds, t.nanoseconds);
    return st.Y(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function gi(t, e) {
    var n = (e.baseMutations || []).map((function(e) {
        return Oe(t.Do, e);
    })), r = e.mutations.map((function(e) {
        return Oe(t.Do, e);
    })), i = ot.fromMillis(e.localWriteTimeMs);
    return new Kr(e.batchId, i, n, r);
}

/** Decodes a DbTarget into TargetData */ function mi(t) {
    var e, n, r = yi(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? yi(t.lastLimboFreeSnapshotVersion) : st.min();
    return void 0 !== t.query.documents ? (g(1 === (n = t.query).documents.length), 
    e = qn(On(De(n.documents[0])))) : e = function(t) {
        var e = De(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            g(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = function t(e) {
            return e ? void 0 !== e.unaryFilter ? [ ze(e) ] : void 0 !== e.fieldFilter ? [ je(e) ] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                return t(e);
            })).reduce((function(t, e) {
                return t.concat(e);
            })) : y() : [];
        }(n.where));
        var u = [];
        n.orderBy && (u = n.orderBy.map((function(t) {
            return function(t) {
                return new ur(Fe(t.field), 
                // visible for testing
                function(t) {
                    switch (t) {
                      case "ASCENDING":
                        return "asc" /* ASCENDING */;

                      case "DESCENDING":
                        return "desc" /* DESCENDING */;

                      default:
                        return;
                    }
                }(t.direction));
            }(t);
        })));
        var a = null;
        n.limit && (a = function(t) {
            var e;
            return ut(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = Ve(n.startAt));
        var h = null;
        return n.endAt && (h = Ve(n.endAt)), qn(Ln(e, i, u, s, a, "F" /* First */ , c, h));
    }(t.query), new gt(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, Z.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function wi(t, e) {
    var n, r = vi(e.et), i = vi(e.lastLimboFreeSnapshotVersion);
    n = dt(e.target) ? Re(t.Do, e.target) : Ue(t.Do, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Bi(e.targetId, lt(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var _i = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.serializer = e, this.Sr = n, this.Co = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.No = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Fo = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return g("" !== e.uid), new t(e.Xs() ? e.uid : "", n, r, i);
    }, t.prototype.xo = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ei(t).ss({
            index: Ci.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.$o = function(t, e, n, r) {
        var i = this, o = Ti(t), s = Ei(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            g("number" == typeof u);
            for (var a = new Kr(u, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return Le(t.Do, e);
                })), i = n.mutations.map((function(e) {
                    return Le(t.Do, e);
                }));
                return new Ci(e, n.batchId, n.rr.toMillis(), r, i);
            }(i.serializer, i.userId, a), h = [], f = new Tt((function(t, e) {
                return H(t.R(), e.R());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], v = Mi.key(i.userId, d.key.path, u);
                f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v, Mi.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.Sr.ko(t, e));
            })), t.Vr((function() {
                i.No[u] = a.keys();
            })), lr.xn(h).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Mo = function(t, e) {
        var n = this;
        return Ei(t).get(e).next((function(t) {
            return t ? (g(t.userId === n.userId), gi(n.serializer, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Oo = function(t, e) {
        var n = this;
        return this.No[e] ? lr.resolve(this.No[e]) : this.Mo(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.No[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.Lo = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Ei(t).ss({
            index: Ci.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (g(e.batchId >= r), o = gi(n.serializer, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Bo = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Ei(t).ss({
            index: Ci.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.qo = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ei(t).Zn(Ci.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return gi(e.serializer, t);
            }));
        }));
    }, t.prototype.Cr = function(t, e) {
        var n = this, r = Mi.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Ti(t).ss({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], c = r[2], h = ci(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return Ei(t).get(c).next((function(t) {
                if (!t) throw y();
                g(t.userId === n.userId), o.push(gi(n.serializer, t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Mr = function(t, e) {
        var n = this, r = new Tt(H), i = [];
        return e.forEach((function(e) {
            var o = Mi.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = Ti(t).ss({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], c = ci(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), lr.xn(i).next((function() {
            return n.Uo(t, r);
        }));
    }, t.prototype.Qr = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = Mi.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new Tt(H);
        return Ti(t).ss({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], c = t[2], h = ci(a);
            s === n.userId && r.T(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (u = u.add(c)) : o.done();
        })).next((function() {
            return n.Uo(t, u);
        }));
    }, t.prototype.Uo = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Ei(t).get(e).next((function(t) {
                if (null === t) throw y();
                g(t.userId === n.userId), r.push(gi(n.serializer, t));
            })));
        })), lr.xn(i).next((function() {
            return r;
        }));
    }, t.prototype.Qo = function(t, e) {
        var n = this;
        return Ii(t.Wo, this.userId, e).next((function(r) {
            return t.Vr((function() {
                n.jo(e.batchId);
            })), lr.forEach(r, (function(e) {
                return n.Co.Ko(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.jo = function(t) {
        delete this.No[t];
    }, t.prototype.Go = function(t) {
        var e = this;
        return this.xo(t).next((function(n) {
            if (!n) return lr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(Mi.prefixForUser(e.userId)), i = [];
            return Ti(t).ss({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = ci(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                g(0 === i.length);
            }));
        }));
    }, t.prototype.zo = function(t, e) {
        return bi(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Ho = function(t) {
        var e = this;
        return Ni(t).get(this.userId).next((function(t) {
            return t || new Vi(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function bi(t, e, n) {
    var r = Mi.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return Ti(t).ss({
        range: o,
        ns: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */ function Ii(t, e, n) {
    var r = t.store(Ci.store), i = t.store(Mi.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.ss({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        g(1 === u);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], p = Mi.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
    }
    return lr.xn(o).next((function() {
        return c;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Ei(t) {
    return oo.Un(t, Ci.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ti(t) {
    return oo.Un(t, Mi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ni(t) {
    return oo.Un(t, Vi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ai = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.serializer = t, this.Sr = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.Tr = function(t, e, n) {
        return Si(t).put(xi(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Ir = function(t, e) {
        var n = Si(t), r = xi(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Yo(t, r);
        }));
    }, t.prototype.Ar = function(t, e) {
        var n = this;
        return Si(t).get(xi(e)).next((function(t) {
            return n.Jo(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Xo = function(t, e) {
        var n = this;
        return Si(t).get(xi(e)).next((function(t) {
            var e = n.Jo(t);
            return e ? {
                Zo: e,
                size: ki(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = St();
        return this.ta(t, e, (function(t, e) {
            var i = n.Jo(e);
            r = r.rt(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.ea = function(t, e) {
        var n = this, r = St(), i = new bt(A.i);
        return this.ta(t, e, (function(t, e) {
            var o = n.Jo(e);
            o ? (r = r.rt(t, o), i = i.rt(t, ki(e))) : (r = r.rt(t, null), i = i.rt(t, 0));
        })).next((function() {
            return {
                na: r,
                sa: i
            };
        }));
    }, t.prototype.ta = function(t, e, n) {
        if (e.m()) return lr.resolve();
        var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i = e.lt(), o = i.Et();
        return Si(t).ss({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = A.$(t); o && A.i(o, s) < 0; ) n(o, null), o = i.Et();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.It() ? i.Et() : null), 
            // Skip to the next key (if there is one).
            o ? r.Jn(o.path.A()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.It() ? i.Et() : null;
        }));
    }, t.prototype.Or = function(t, e, n) {
        var r = this, i = kt(), o = e.path.length + 1, s = {};
        if (n.isEqual(st.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.A();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.A(), c = pi(n);
            s.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), s.index = ji.collectionReadTimeIndex;
        }
        return Si(t).ss(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = fi(r.serializer, n);
                e.path.T(u.key.path) ? u instanceof Dn && Qn(e, u) && (i = i.rt(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.ia = function(t, e) {
        var n = this, r = Dt(), i = pi(e), o = Si(t), s = IDBKeyRange.lowerBound(i, !0);
        return o.ss({
            index: ji.readTimeIndex,
            range: s
        }, (function(t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var o = fi(n.serializer, e);
            r = r.rt(o.key, o), i = e.readTime;
        })).next((function() {
            return {
                ra: r,
                readTime: di(i)
            };
        }));
    }, 
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.min() if not available.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.oa = function(t) {
        var e = Si(t), n = st.min();
        // If there are no existing entries, we return SnapshotVersion.min().
                return e.ss({
            index: ji.readTimeIndex,
            reverse: !0
        }, (function(t, e, r) {
            e.readTime && (n = di(e.readTime)), r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.aa = function(e) {
        return new t.ca(this, !!e && e.ua);
    }, t.prototype.ha = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Di(t).get(zi.key).next((function(t) {
            return g(!!t), t;
        }));
    }, t.prototype.Yo = function(t, e) {
        return Di(t).put(zi.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Jo = function(t) {
        if (t) {
            var e = fi(this.serializer, t);
            return e instanceof Sn && e.version.isEqual(st.min()) ? null : e;
        }
        return null;
    }, t;
}();

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Di(t) {
    return oo.Un(t, zi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Si(t) {
    return oo.Un(t, ji.store);
}

function xi(t) {
    return t.path.A();
}

/**
 * Retrusn an approximate size for the given document.
 */ function ki(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw y();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ Ai.ca = /** @class */ function(e) {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).la = t, r.ua = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r._a = new it((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return t.__extends(n, e), n.prototype.gr = function(t) {
        var e = this, n = [], r = 0, i = new Tt((function(t, e) {
            return H(t.R(), e.R());
        }));
        return this.dr.forEach((function(o, s) {
            var u = e._a.get(o);
            if (s) {
                var a = li(e.la.serializer, s, e.readTime);
                i = i.add(o.path.h());
                var c = ki(a);
                r += c - u, n.push(e.la.Tr(t, o, a));
            } else if (r -= u, e.ua) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = li(e.la.serializer, new Sn(o, st.min()), e.readTime);
                n.push(e.la.Tr(t, o, h));
            } else n.push(e.la.Ir(t, o));
        })), i.forEach((function(r) {
            n.push(e.la.Sr.ko(t, r));
        })), n.push(this.la.updateMetadata(t, r)), lr.xn(n);
    }, n.prototype.Rr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.la.Xo(t, e).next((function(t) {
            return null === t ? (n._a.set(e, 0), null) : (n._a.set(e, t.size), t.Zo);
        }));
    }, n.prototype.Pr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.la.ea(t, e).next((function(t) {
            var e = t.na;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.sa.forEach((function(t, e) {
                n._a.set(t, e);
            })), e;
        }));
    }, n;
}(Yr);

var Li = /** @class */ function() {
    function t() {
        this.fa = new Oi;
    }
    return t.prototype.ko = function(t, e) {
        return this.fa.add(e), lr.resolve();
    }, t.prototype.Ur = function(t, e) {
        return lr.resolve(this.fa.getEntries(e));
    }, t;
}(), Oi = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t._(), n = t.h(), r = this.index[e] || new Tt(E.i), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t._(), n = t.h(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Tt(E.i)).A();
    }, t;
}(), Ri = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, e, n, r) {
        var i = this;
        g(n < r && n >= 0 && r <= 10);
        var o = new gr(e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Pi.store);
        }(t), function(t) {
            t.createObjectStore(Vi.store, {
                keyPath: Vi.keyPath
            }), t.createObjectStore(Ci.store, {
                keyPath: Ci.keyPath,
                autoIncrement: !0
            }).createIndex(Ci.userMutationsIndex, Ci.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Mi.store);
        }(t), Ki(t), function(t) {
            t.createObjectStore(ji.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = lr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Gi.store), t.deleteObjectStore(Bi.store), t.deleteObjectStore(Wi.store);
        }(t), Ki(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Wi.store), n = new Wi(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, st.min().X(), 
                /*targetCount=*/ 0);
                return e.put(Wi.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(Ci.store).Zn().next((function(n) {
                    t.deleteObjectStore(Ci.store), t.createObjectStore(Ci.store, {
                        keyPath: Ci.keyPath,
                        autoIncrement: !0
                    }).createIndex(Ci.userMutationsIndex, Ci.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Ci.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return lr.xn(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(Hi.store, {
                    keyPath: Hi.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.removeAcknowledgedMutations(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(zi.store);
            }(t), i.addDocumentGlobal(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ensureSequenceNumbers(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.createCollectionParentIndex(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(ji.store);
                e.createIndex(ji.readTimeIndex, ji.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(ji.collectionReadTimeIndex, ji.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.rewriteCanonicalIds(o);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var e = 0;
        return t.store(ji.store).ss((function(t, n) {
            e += ki(n);
        })).next((function() {
            var n = new zi(e);
            return t.store(zi.store).put(zi.key, n);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var e = this, n = t.store(Vi.store), r = t.store(Ci.store);
        return n.Zn().next((function(n) {
            return lr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Zn(Ci.userMutationsIndex, i).next((function(r) {
                    return lr.forEach(r, (function(r) {
                        g(r.userId === n.userId);
                        var i = gi(e.serializer, r);
                        return Ii(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var e = t.store(Gi.store), n = t.store(ji.store);
        return t.store(Wi.store).get(Wi.key).next((function(t) {
            var r = [];
            return n.ss((function(n, i) {
                var o = new E(n), s = function(t) {
                    return [ 0, si(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? lr.resolve() : function(n) {
                        return e.put(new Gi(0, si(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return lr.xn(r);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, e) {
        // Create the index.
        t.createObjectStore(Qi.store, {
            keyPath: Qi.keyPath
        });
        var n = e.store(Qi.store), r = new Oi, i = function(t) {
            if (r.add(t)) {
                var e = t._(), i = t.h();
                return n.put({
                    collectionId: e,
                    parent: si(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(ji.store).ss({
            ns: !0
        }, (function(t, e) {
            var n = new E(t);
            return i(n.h());
        })).next((function() {
            return e.store(Mi.store).ss({
                ns: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], ci(n));
                return i(r.h());
            }));
        }));
    }, t.prototype.rewriteCanonicalIds = function(t) {
        var e = this, n = t.store(Bi.store);
        return n.ss((function(t, r) {
            var i = mi(r), o = wi(e.serializer, i);
            return n.put(o);
        }));
    }, t;
}(), Ui = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Pi = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Pi.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Pi.key = "owner";

var Vi = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Vi.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Vi.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Ci = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Ci.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Ci.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Ci.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Ci.userMutationsKeyPath = [ "userId", "batchId" ];

var Mi = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, si(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, si(e), n ];
    }, t;
}();

Mi.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
Mi.PLACEHOLDER = new Mi;

var qi = function(t, e) {
    this.path = t, this.readTime = e;
}, Fi = function(t, e) {
    this.path = t, this.version = e;
}, ji = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ ji.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
ji.readTimeIndex = "readTimeIndex", ji.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
ji.collectionReadTimeIndex = "collectionReadTimeIndex", ji.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var zi = 
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function(t) {
    this.byteSize = t;
};

zi.store = "remoteDocumentGlobal", zi.key = "remoteDocumentGlobalKey";

var Bi = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Bi.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Bi.keyPath = "targetId", 
/** The name of the queryTargets index. */
Bi.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Bi.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Gi = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Gi.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Gi.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Gi.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Gi.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Wi = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Wi.key = "targetGlobalKey", Wi.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Qi = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ function Ki(t) {
    t.createObjectStore(Gi.store, {
        keyPath: Gi.keyPath
    }).createIndex(Gi.documentTargetsIndex, Gi.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Bi.store, {
        keyPath: Bi.keyPath
    }).createIndex(Bi.queryTargetsIndexName, Bi.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Wi.store);
}

Qi.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Qi.keyPath = [ "collectionId", "parent" ];

var Hi = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ Hi.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
Hi.keyPath = "clientId";

var Yi = t.__spreadArrays(t.__spreadArrays(t.__spreadArrays([ Vi.store, Ci.store, Mi.store, ji.store, Bi.store, Pi.store, Wi.store, Gi.store ], [ Hi.store ]), [ zi.store ]), [ Qi.store ]), Xi = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.da = new Oi;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.ko = function(t, e) {
        var n = this;
        if (!this.da.has(e)) {
            var r = e._(), i = e.h();
            t.Vr((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.da.add(e);
            }));
            var o = {
                collectionId: r,
                parent: si(i)
            };
            return Zi(t).put(o);
        }
        return lr.resolve();
    }, t.prototype.Ur = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ X(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Zi(t).Zn(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(ci(o.parent));
            }
            return n;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A persisted implementation of IndexManager.
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Zi(t) {
    return oo.Un(t, Qi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var Ji = /** @class */ function() {
    function t(t) {
        this.wa = t;
    }
    return t.prototype.next = function() {
        return this.wa += 2, this.wa;
    }, t.ma = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Ta = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), $i = /** @class */ function() {
    function t(t, e) {
        this.Co = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Ea = function(t) {
        var e = this;
        return this.Ia(t).next((function(n) {
            var r = new Ji(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Aa(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.Ra = function(t) {
        return this.Ia(t).next((function(t) {
            return st.Y(new ot(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Pa = function(t) {
        return this.Ia(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.ga = function(t, e, n) {
        var r = this;
        return this.Ia(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.X()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Aa(t, i);
        }));
    }, t.prototype.ya = function(t, e) {
        var n = this;
        return this.Va(t, e).next((function() {
            return n.Ia(t).next((function(r) {
                return r.targetCount += 1, n.pa(e, r), n.Aa(t, r);
            }));
        }));
    }, t.prototype.ba = function(t, e) {
        return this.Va(t, e);
    }, t.prototype.va = function(t, e) {
        var n = this;
        return this.Sa(t, e.targetId).next((function() {
            return to(t).delete(e.targetId);
        })).next((function() {
            return n.Ia(t);
        })).next((function(e) {
            return g(e.targetCount > 0), e.targetCount -= 1, n.Aa(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.Vo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return to(t).ss((function(s, u) {
            var a = mi(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.va(t, a)));
        })).next((function() {
            return lr.xn(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.De = function(t, e) {
        return to(t).ss((function(t, n) {
            var r = mi(n);
            e(r);
        }));
    }, t.prototype.Ia = function(t) {
        return eo(t).get(Wi.key).next((function(t) {
            return g(null !== t), t;
        }));
    }, t.prototype.Aa = function(t, e) {
        return eo(t).put(Wi.key, e);
    }, t.prototype.Va = function(t, e) {
        return to(t).put(wi(this.serializer, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.pa = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.Da = function(t) {
        return this.Ia(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.Ca = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = lt(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return to(t).ss({
            range: r,
            index: Bi.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = mi(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        pt(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.Na = function(t, e, n) {
        var r = this, i = [], o = no(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = si(e.path);
            i.push(o.put(new Gi(n, s))), i.push(r.Co.Fa(t, n, e));
        })), lr.xn(i);
    }, t.prototype.xa = function(t, e, n) {
        var r = this, i = no(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return lr.forEach(e, (function(e) {
            var o = si(e.path);
            return lr.xn([ i.delete([ n, o ]), r.Co.$a(t, n, e) ]);
        }));
    }, t.prototype.Sa = function(t, e) {
        var n = no(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.ka = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = no(t), i = Rt();
        return r.ss({
            range: n,
            ns: !0
        }, (function(t, e, n) {
            var r = ci(t[1]), o = new A(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.zo = function(t, e) {
        var n = si(e.path), r = IDBKeyRange.bound([ n ], [ X(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return no(t).ss({
            index: Gi.documentTargetsIndex,
            ns: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.qe = function(t, e) {
        return to(t).get(e).next((function(t) {
            return t ? mi(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function to(t) {
    return oo.Un(t, Bi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function eo(t) {
    return oo.Un(t, Wi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function no(t) {
    return oo.Un(t, Gi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ro = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", io = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Wo = t, r.Ma = n, r;
    }
    return t.__extends(n, e), n;
}(Zr), oo = /** @class */ function() {
    function e(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    t, n, r, i, o, s, u, h, f, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    l) {
        if (this.allowTabSynchronization = t, this.persistenceKey = n, this.clientId = r, 
        this._n = o, this.window = s, this.document = u, this.Oa = f, this.La = l, this.Ba = null, 
        this.qa = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Ua = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Qa = null, 
        /** The client metadata refresh task. */
        this.Wa = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.ja = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Ka = function(t) {
            return Promise.resolve();
        }, !e.On()) throw new c(a.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.Co = new ao(this, i), this.Ga = n + "main", this.serializer = new hi(h), this.za = new pr(this.Ga, 10, new Ri(this.serializer)), 
        this.Ha = new $i(this.Co, this.serializer), this.Sr = new Xi, this.br = new Ai(this.serializer, this.Sr), 
        this.window && this.window.localStorage ? this.Ya = this.window.localStorage : (this.Ya = null, 
        !1 === l && p("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    return e.Un = function(t, e) {
        if (t instanceof io) return pr.Un(t.Wo, e);
        throw y();
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    e.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.Ja().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new c(a.FAILED_PRECONDITION, ro);
            return t.Xa(), t.Za(), t.tc(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.Ha.Pa(e);
            }));
        })).then((function(e) {
            t.Ba = new Vr(e, t.Oa);
        })).then((function() {
            t.qa = !0;
        })).catch((function(e) {
            return t.za && t.za.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.ec = function(e) {
        var n = this;
        return this.Ka = function(r) {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return this.Ti ? [ 2 /*return*/ , e(r) ] : [ 2 /*return*/ ];
                }));
            }));
        }, e(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.nc = function(e) {
        var n = this;
        this.za.jn((function(r) {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return null === r.newVersion ? [ 4 /*yield*/ , e() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.sc = function(e) {
        var n = this;
        this.networkEnabled !== e && (this.networkEnabled = e, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this._n.ds((function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.Ti ? [ 4 /*yield*/ , this.Ja() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    e.prototype.Ja = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return uo(e).put(new Hi(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.ic(e).next((function(e) {
                    e || (t.isPrimary = !1, t._n.Ds((function() {
                        return t.Ka(!1);
                    })));
                }));
            })).next((function() {
                return t.rc(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.oc(e).next((function() {
                    return !1;
                })) : !!n && t.ac(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (yr(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return l("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return l("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t._n.Ds((function() {
                return t.Ka(e);
            })), t.isPrimary = e;
        }));
    }, e.prototype.ic = function(t) {
        var e = this;
        return so(t).get(Pi.key).next((function(t) {
            return lr.resolve(e.cc(t));
        }));
    }, e.prototype.uc = function(t) {
        return uo(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    e.prototype.hc = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.lc(this.ja, 18e5) ? [ 3 /*break*/ , 2 ] : (this.ja = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var n = e.Un(t, Hi.store);
                        return n.Zn().next((function(t) {
                            var e = s._c(t, 18e5), r = t.filter((function(t) {
                                return -1 === e.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return lr.forEach(r, (function(t) {
                                return n.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (n = t.sent(), this.Ya) for (r = 0, i = n; r < i.length; r++) o = i[r], this.Ya.removeItem(this.fc(o.clientId));
                    t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    e.prototype.tc = function() {
        var t = this;
        this.Wa = this._n.gn("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.Ja().then((function() {
                return t.hc();
            })).then((function() {
                return t.tc();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ e.prototype.cc = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    e.prototype.rc = function(t) {
        var e = this;
        return this.La ? lr.resolve(!0) : so(t).get(Pi.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.lc(n.leaseTimestampMs, 5e3) && !e.dc(n.ownerId)) {
                if (e.cc(n) && e.networkEnabled) return !0;
                if (!e.cc(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new c(a.FAILED_PRECONDITION, ro);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || uo(t).Zn().next((function(t) {
                return void 0 === e._c(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && l("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, e.prototype.Si = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.qa = !1, this.wc(), this.Wa && (this.Wa.cancel(), this.Wa = null), this.mc(), 
                    this.Tc(), [ 4 /*yield*/ , this.za.runTransaction("readwrite", [ Pi.store, Hi.store ], (function(t) {
                        var n = new io(t, Vr.oi);
                        return e.oc(n).next((function() {
                            return e.uc(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return t.sent(), this.za.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.Ec(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    e.prototype._c = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.lc(t.updateTimeMs, e) && !n.dc(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.Vi = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return uo(e).Zn().next((function(e) {
                return t._c(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(e.prototype, "Ti", {
        get: function() {
            return this.qa;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.Ic = function(t) {
        return _i.Fo(t, this.serializer, this.Sr, this.Co);
    }, e.prototype.Ac = function() {
        return this.Ha;
    }, e.prototype.Rc = function() {
        return this.br;
    }, e.prototype.Pc = function() {
        return this.Sr;
    }, e.prototype.runTransaction = function(t, e, n) {
        var r = this;
        l("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.za.runTransaction(o, Yi, (function(o) {
            return i = new io(o, r.Ba ? r.Ba.next() : Vr.oi), "readwrite-primary" === e ? r.ic(i).next((function(t) {
                return !!t || r.rc(i);
            })).next((function(e) {
                if (!e) throw p("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r._n.Ds((function() {
                    return r.Ka(!1);
                })), new c(a.FAILED_PRECONDITION, Xr);
                return n(i);
            })).next((function(t) {
                return r.ac(i).next((function() {
                    return t;
                }));
            })) : r.gc(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.pr(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    e.prototype.gc = function(t) {
        var e = this;
        return so(t).get(Pi.key).next((function(t) {
            if (null !== t && e.lc(t.leaseTimestampMs, 5e3) && !e.dc(t.ownerId) && !e.cc(t) && !(e.La || e.allowTabSynchronization && t.allowTabSynchronization)) throw new c(a.FAILED_PRECONDITION, ro);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    e.prototype.ac = function(t) {
        var e = new Pi(this.clientId, this.allowTabSynchronization, Date.now());
        return so(t).put(Pi.key, e);
    }, e.On = function() {
        return pr.On();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ e.prototype.oc = function(t) {
        var e = this, n = so(t);
        return n.get(Pi.key).next((function(t) {
            return e.cc(t) ? (l("IndexedDbPersistence", "Releasing primary lease."), n.delete(Pi.key)) : lr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ e.prototype.lc = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (p("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, e.prototype.Xa = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Qa = function() {
            t._n.ds((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.Ja();
            }));
        }, this.document.addEventListener("visibilitychange", this.Qa), this.inForeground = "visible" === this.document.visibilityState);
    }, e.prototype.mc = function() {
        this.Qa && (this.document.removeEventListener("visibilitychange", this.Qa), this.Qa = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    e.prototype.Za = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Ua = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.wc(), e._n.ds((function() {
                return e.Si();
            }));
        }, this.window.addEventListener("unload", this.Ua));
    }, e.prototype.Tc = function() {
        this.Ua && (this.window.removeEventListener("unload", this.Ua), this.Ua = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    e.prototype.dc = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Ya) || void 0 === e ? void 0 : e.getItem(this.fc(t)));
            return l("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return p("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    e.prototype.wc = function() {
        if (this.Ya) try {
            this.Ya.setItem(this.fc(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            p("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ e.prototype.Ec = function() {
        if (this.Ya) try {
            this.Ya.removeItem(this.fc(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, e.prototype.fc = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, e;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function so(t) {
    return oo.Un(t, Pi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function uo(t) {
    return oo.Un(t, Hi.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ var ao = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.do = new oi(this, e);
    }
    return t.prototype.Ro = function(t) {
        var e = this.yc(t);
        return this.db.Ac().Da(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.yc = function(t) {
        var e = 0;
        return this.yo(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.De = function(t, e) {
        return this.db.Ac().De(t, e);
    }, t.prototype.yo = function(t, e) {
        return this.Vc(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.Fa = function(t, e, n) {
        return co(t, n);
    }, t.prototype.$a = function(t, e, n) {
        return co(t, n);
    }, t.prototype.Vo = function(t, e, n) {
        return this.db.Ac().Vo(t, e, n);
    }, t.prototype.Ko = function(t, e) {
        return co(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.bc = function(t, e) {
        return function(t, e) {
            var n = !1;
            return Ni(t).rs((function(r) {
                return bi(t, r, e).next((function(t) {
                    return t && (n = !0), lr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.po = function(t, e) {
        var n = this, r = this.db.Rc().aa(), i = [], o = 0;
        return this.Vc(t, (function(s, u) {
            if (u <= e) {
                var a = n.bc(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.Ar(t, s).next((function() {
                        return r.Ir(s), no(t).delete([ 0, si(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return lr.xn(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.nt(t.Ma);
        return this.db.Ac().ba(t, n);
    }, t.prototype.vc = function(t, e) {
        return co(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Vc = function(t, e) {
        var n, r = no(t), i = Vr.oi;
        return r.ss({
            index: Gi.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Vr.oi && e(new A(ci(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Vr.oi;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Vr.oi && e(new A(ci(n)), i);
        }));
    }, t.prototype.vo = function(t) {
        return this.db.Rc().ha(t);
    }, t;
}();

function co(t, e) {
    return no(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Gi(0, si(t.path), e);
    }(e, t.Ma));
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function ho(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.W || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */;
}

var fo = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.Sc = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Dc = new bt(H), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Cc = new it((function(t) {
            return lt(t);
        }), pt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Nc = st.min(), this.vr = t.Ic(n), this.Fc = t.Rc(), this.Ha = t.Ac(), this.xc = new Jr(this.Fc, this.vr, this.persistence.Pc()), 
        this.Sc.$c(this.xc);
    }
    return t.prototype.Eo = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.bo(n, e.Dc);
        }));
    }, t;
}();

/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function lo(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Fc.aa({
            ua: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), s = lr.resolve();
            return o.forEach((function(t) {
                s = s.next((function() {
                    return r.Ar(e, t);
                })).next((function(e) {
                    var o = e, s = n._r.get(t);
                    g(null !== s), (!o || o.version.L(s) < 0) && ((o = i.ar(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.Tr(o, n.lr));
                }));
            })), s.next((function() {
                return t.vr.Qo(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.vr.Go(t);
        })).next((function() {
            return n.xc.$r(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function po(t) {
    var e = m(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.Ha.Ra(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function vo(t, e) {
    var n = m(t), r = e.et, i = n.Dc;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Fc.aa({
            ua: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Dc;
        var s = [];
        e.Gt.forEach((function(e, o) {
            var u = i.get(o);
            if (u) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                s.push(n.Ha.xa(t, e.ne, o).next((function() {
                    return n.Ha.Na(t, e.te, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.O() > 0) {
                    var c = u.st(a, r).nt(t.Ma);
                    i = i.rt(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return g(e.resumeToken.O() > 0), 0 === t.resumeToken.O() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.et.J() - t.et.J() >= 3e8 || n.te.size + n.ee.size + n.ne.size > 0);
                    }(u, c, e) && s.push(n.Ha.ba(t, c));
                }
            }
        }));
        var u = Dt(), a = Rt();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.Ht.forEach((function(t, e) {
            a = a.add(t);
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(o.getEntries(t, a).next((function(i) {
            e.Ht.forEach((function(a, c) {
                var h = i.get(a);
                // Note: The order of the steps below is important, since we want
                // to ensure that rejected limbo resolutions (which fabricate
                // NoDocuments with SnapshotVersion.min()) never add documents to
                // cache.
                                c instanceof Sn && c.version.isEqual(st.min()) ? (
                // NoDocuments with SnapshotVersion.min() are used in manufactured
                // events. We remove these documents from cache since we lost
                // access.
                o.Ir(a, r), u = u.rt(a, c)) : null == h || c.version.L(h.version) > 0 || 0 === c.version.L(h.version) && h.hasPendingWrites ? (o.Tr(c, r), 
                u = u.rt(a, c)) : l("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), 
                e.Yt.has(a) && s.push(n.persistence.Co.vc(t, a));
            }));
        }))), !r.isEqual(st.min())) {
            var c = n.Ha.Ra(t).next((function(e) {
                return n.Ha.ga(t, t.Ma, r);
            }));
            s.push(c);
        }
        return lr.xn(s).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.xc.kr(t, u);
        }));
    })).then((function(t) {
        return n.Dc = i, t;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */ function yo(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.vr.Lo(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function go(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n.Ha.Ca(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, lr.resolve(r)) : n.Ha.Ea(t).next((function(i) {
                return r = new gt(e, i, 0 /* Listen */ , t.Ma), n.Ha.ya(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.Dc.get(t.targetId);
        return (null === r || t.et.L(r.et) > 0) && (n.Dc = n.Dc.rt(t.targetId, t), n.Cc.set(e, t.targetId)), 
        t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function mo(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                i = m(e), o = i.Dc.get(n), s = r ? "readwrite" : "readwrite-primary", t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 5 ]), r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , i.persistence.runTransaction("Release target", s, (function(t) {
                    return i.persistence.Co.removeTarget(t, o);
                })) ];

              case 2:
                t.sent(), t.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!yr(u = t.sent())) throw u;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return l("LocalStore", "Failed to update sequence numbers for target " + n + ": " + u), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return i.Dc = i.Dc.remove(n), i.Cc.delete(o.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults Whether results from previous executions can
 * be used to optimize this query execution.
 */ function wo(t, e, n) {
    var r = m(t), i = st.min(), o = Rt();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = m(t), i = r.Cc.get(n);
            return void 0 !== i ? lr.resolve(r.Dc.get(i)) : r.Ha.Ca(e, n);
        }(r, t, qn(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ha.ka(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.Sc.Or(t, e, n ? i : st.min(), n ? o : Rt());
        })).next((function(t) {
            return {
                documents: t,
                kc: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function _o(t, e) {
    var n = m(t), r = m(n.Ha), i = n.Dc.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.qe(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function bo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            if (e.code !== a.FAILED_PRECONDITION || e.message !== Xr) throw e;
            return l("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ var Io = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Mc = new Tt(Eo.Oc), 
        // A set of outstanding references to a document sorted by target id.
        this.Lc = new Tt(Eo.Bc)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.m = function() {
        return this.Mc.m();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Fa = function(t, e) {
        var n = new Eo(t, e);
        this.Mc = this.Mc.add(n), this.Lc = this.Lc.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.qc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Fa(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.$a = function(t, e) {
        this.Uc(new Eo(t, e));
    }, t.prototype.Qc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.$a(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Wc = function(t) {
        var e = this, n = new A(new E([])), r = new Eo(n, t), i = new Eo(n, t + 1), o = [];
        return this.Lc.Nt([ r, i ], (function(t) {
            e.Uc(t), o.push(t.key);
        })), o;
    }, t.prototype.jc = function() {
        var t = this;
        this.Mc.forEach((function(e) {
            return t.Uc(e);
        }));
    }, t.prototype.Uc = function(t) {
        this.Mc = this.Mc.delete(t), this.Lc = this.Lc.delete(t);
    }, t.prototype.Kc = function(t) {
        var e = new A(new E([])), n = new Eo(e, t), r = new Eo(e, t + 1), i = Rt();
        return this.Lc.Nt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.zo = function(t) {
        var e = new Eo(t, 0), n = this.Mc.xt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Eo = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Gc = e
        /** Compare by key then by ID */;
    }
    return t.Oc = function(t, e) {
        return A.i(t.key, e.key) || H(t.Gc, e.Gc);
    }, 
    /** Compare by ID then by key */ t.Bc = function(t, e) {
        return H(t.Gc, e.Gc) || A.i(t.key, e.key);
    }, t;
}(), To = function(t, e) {
    this.user = e, this.type = "OAuth", this.zc = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.zc.Authorization = "Bearer " + t;
}, No = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.Hc = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.Yc = function() {}, t.prototype.Jc = function(t) {
        this.Hc = t, 
        // Fire with initial user.
        t(Pr.UNAUTHENTICATED);
    }, t.prototype.Xc = function() {
        this.Hc = null;
    }, t;
}(), Ao = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.Zc = null, 
        /** Tracks the current User. */
        this.currentUser = Pr.UNAUTHENTICATED, this.tu = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.eu = 0, 
        /** The listener registered with setChangeListener(). */
        this.Hc = null, this.forceRefresh = !1, this.Zc = function() {
            e.eu++, e.currentUser = e.nu(), e.tu = !0, e.Hc && e.Hc(e.currentUser);
        }, this.eu = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Zc) : (
        // if auth is not available, invoke tokenListener once with null token
        this.Zc(null), t.get().then((function(t) {
            e.auth = t, e.Zc && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.Zc);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.eu, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.eu !== e ? (l("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (g("string" == typeof n.accessToken), new To(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.Yc = function() {
        this.forceRefresh = !0;
    }, t.prototype.Jc = function(t) {
        this.Hc = t, 
        // Fire the initial event
        this.tu && t(this.currentUser);
    }, t.prototype.Xc = function() {
        this.auth && this.auth.removeAuthTokenListener(this.Zc), this.Zc = null, this.Hc = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.nu = function() {
        var t = this.auth && this.auth.getUid();
        return g(null === t || "string" == typeof t), new Pr(t);
    }, t;
}(), Do = /** @class */ function() {
    function t(t, e) {
        this.su = t, this.iu = e, this.type = "FirstParty", this.user = Pr.ei;
    }
    return Object.defineProperty(t.prototype, "zc", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.iu
            }, e = this.su.auth.ru([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), So = /** @class */ function() {
    function t(t, e) {
        this.su = t, this.iu = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new Do(this.su, this.iu));
    }, t.prototype.Jc = function(t) {
        // Fire with initial uid.
        t(Pr.ei);
    }, t.prototype.Xc = function() {}, t.prototype.Yc = function() {}, t;
}(), xo = /** @class */ function() {
    function e(t, e, n, r, i, o) {
        this._n = t, this.ou = n, this.au = r, this.cu = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.uu = 0, this.hu = null, this.stream = null, this.gs = new fr(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return e.prototype.lu = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    e.prototype._u = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    e.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.fu();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    e.prototype.stop = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.lu() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    e.prototype.du = function() {
        this.state = 0 /* Initial */ , this.gs.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    e.prototype.wu = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this._u() && null === this.hu && (this.hu = this._n.gn(this.ou, 6e4, (function() {
            return t.mu();
        })));
    }, 
    /** Sends a message to the underlying stream. */ e.prototype.Tu = function(t) {
        this.Eu(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ e.prototype.mu = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                return this._u() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ e.prototype.Eu = function() {
        this.hu && (this.hu.cancel(), this.hu = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    e.prototype.close = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.Eu(), this.gs.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.uu++, 3 /* Error */ !== e ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.gs.reset() : n && n.code === a.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    p(n.toString()), p("Using maximum backoff delay to prevent overloading the backend."), 
                    this.gs.An()) : n && n.code === a.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.cu.Yc(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.Iu(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = e, [ 4 /*yield*/ , this.listener.Au(n) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    e.prototype.Iu = function() {}, e.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Ru(this.uu), n = this.uu;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.cu.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.uu === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Pu(e);
        }), (function(n) {
            e((function() {
                var e = new c(a.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.gu(e);
            }));
        }));
    }, e.prototype.Pu = function(t) {
        var e = this, n = this.Ru(this.uu);
        this.stream = this.yu(t), this.stream.Vu((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Vu();
            }));
        })), this.stream.Au((function(t) {
            n((function() {
                return e.gu(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, e.prototype.fu = function() {
        var e = this;
        this.state = 4 /* Backoff */ , this.gs.Rn((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    e.prototype.gu = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return l("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    e.prototype.Ru = function(t) {
        var e = this;
        return function(n) {
            e._n.ds((function() {
                return e.uu === t ? n() : (l("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, e;
}(), ko = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return t.__extends(n, e), n.prototype.yu = function(t) {
        return this.au.pu("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.gs.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : y();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Ue ? (g(void 0 === e || "string" == typeof e), Z.fromBase64String(e || "")) : (g(void 0 === e || e instanceof Uint8Array), 
                    Z.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function(t) {
                    var e = void 0 === t.code ? a.UNKNOWN : _t(t.code);
                    return new c(e, t.message || "");
                }(s);
                n = new Bt(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var h = e.documentChange;
                h.document, h.document.name, h.document.updateTime;
                var f = Ne(t, h.document.name), l = be(h.document.updateTime), p = new En({
                    mapValue: {
                        fields: h.document.fields
                    }
                }), d = new Dn(f, l, p, {}), v = h.targetIds || [], m = h.removedTargetIds || [];
                n = new jt(v, m, d.key, d);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var w = e.documentDelete;
                w.document;
                var _ = Ne(t, w.document), b = w.readTime ? be(w.readTime) : st.min(), I = new Sn(_, b), E = w.removedTargetIds || [];
                n = new jt([], E, I.key, I);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var T = e.documentRemove;
                T.document;
                var N = Ne(t, T.document), A = T.removedTargetIds || [];
                n = new jt([], A, N, null);
            } else {
                if (!("filter" in e)) return y();
                e.filter;
                var D = e.filter;
                D.targetId;
                var S = D.count || 0, x = new mt(S), k = D.targetId;
                n = new zt(k, x);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return st.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? st.min() : e.readTime ? be(e.readTime) : st.min();
        }(t);
        return this.listener.bu(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.vu = function(t) {
        var e = {};
        e.database = Se(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = dt(r) ? {
                documents: Re(t, r)
            } : {
                query: Ue(t, r)
            }).targetId = e.targetId, e.resumeToken.O() > 0 && (n.resumeToken = we(t, e.resumeToken)), 
            n;
        }(this.serializer, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return y();
                }
            }(0, e.tt);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.Tu(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Su = function(t) {
        var e = {};
        e.database = Se(this.serializer), e.removeTarget = t, this.Tu(e);
    }, n;
}(xo), Lo = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.Du = !1, s;
    }
    return t.__extends(n, e), Object.defineProperty(n.prototype, "Cu", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Du;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Du = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.Iu = function() {
        this.Du && this.Nu([]);
    }, n.prototype.yu = function(t) {
        return this.au.pu("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        g(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Du) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.gs.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (g(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? be(t.updateTime) : be(e);
                        n.isEqual(st.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = be(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new sn(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = be(t.commitTime);
            return this.listener.Fu(n, e);
        }
        // The first response is always the handshake response
                return g(!t.writeResults || 0 === t.writeResults.length), this.Du = !0, 
        this.listener.xu();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.$u = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Se(this.serializer), this.Tu(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Nu = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Le(e.serializer, t);
            }))
        };
        this.Tu(n);
    }, n;
}(xo), Oo = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).credentials = t, i.au = n, i.serializer = r, i.ku = !1, 
        i;
    }
    return t.__extends(n, e), n.prototype.Mu = function() {
        if (this.ku) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.Ou = function(t, e, n) {
        var r = this;
        return this.Mu(), this.credentials.getToken().then((function(i) {
            return r.au.Ou(t, e, n, i);
        })).catch((function(t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.Yc(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.Lu = function(t, e, n) {
        var r = this;
        return this.Mu(), this.credentials.getToken().then((function(i) {
            return r.au.Lu(t, e, n, i);
        })).catch((function(t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.Yc(), t;
        }));
    }, n.prototype.terminate = function() {
        this.ku = !1;
    }, n;
}((function() {})), Ro = /** @class */ function() {
    function t(t, e) {
        this.os = t, this.fi = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Bu = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.qu = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Uu = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Qu = function() {
        var t = this;
        0 === this.Bu && (this.Wu("Unknown" /* Unknown */), this.qu = this.os.gn("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.qu = null, t.ju("Backend didn't respond within 10 seconds."), t.Wu("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Ku = function(t) {
        "Online" /* Online */ === this.state ? this.Wu("Unknown" /* Unknown */) : (this.Bu++, 
        this.Bu >= 1 && (this.Gu(), this.ju("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Wu("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Gu(), this.Bu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Uu = !1), this.Wu(t);
    }, t.prototype.Wu = function(t) {
        t !== this.state && (this.state = t, this.fi(t));
    }, t.prototype.ju = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Uu ? (p(e), this.Uu = !1) : l("OnlineStateTracker", e);
    }, t.prototype.Gu = function() {
        null !== this.qu && (this.qu.cancel(), this.qu = null);
    }, t;
}(), Uo = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
e, 
/** The client-side proxy for interacting with the backend. */
n, r, i, o) {
    var s = this;
    this.zu = e, this.Hu = n, this.os = r, this.Yu = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.Ju = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.Xu = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.Zu = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.th = [], this.eh = o, this.eh.nh((function(e) {
        r.ds((function() {
            return t.__awaiter(s, void 0, void 0, (function() {
                return t.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return Go(this) ? (l("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(e) {
                            return t.__awaiter(this, void 0, void 0, (function() {
                                var n;
                                return t.__generator(this, (function(t) {
                                    switch (t.label) {
                                      case 0:
                                        return (n = m(e)).Zu.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , Vo(n) ];

                                      case 1:
                                        return t.sent(), n.sh.set("Unknown" /* Unknown */), n.Zu.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , Po(n) ];

                                      case 2:
                                        return t.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.sh = new Ro(r, i);
};

function Po(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                if (!Go(e)) return [ 3 /*break*/ , 4 ];
                n = 0, r = e.th, t.label = 1;

              case 1:
                return n < r.length ? [ 4 /*yield*/ , (0, r[n])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                t.sent(), t.label = 3;

              case 3:
                return n++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function Vo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                n = 0, r = e.th, t.label = 1;

              case 1:
                return n < r.length ? [ 4 /*yield*/ , (0, r[n])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                t.sent(), t.label = 3;

              case 3:
                return n++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Co(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return n = m(e), l("RemoteStore", "RemoteStore shutting down."), n.Zu.add(5 /* Shutdown */), 
                [ 4 /*yield*/ , Vo(n) ];

              case 1:
                return t.sent(), n.eh.Si(), 
                // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                // triggering spurious listener events with cached data, etc.
                n.sh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function Mo(t, e) {
    var n = m(t);
    n.Xu.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Xu.set(e.targetId, e), Bo(n) ? 
    // The listen will be sent in onWatchStreamOpen
    zo(n) : os(n)._u() && Fo(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function qo(t, e) {
    var n = m(t), r = os(n);
    n.Xu.delete(e), r._u() && jo(n, e), 0 === n.Xu.size && (r._u() ? r.wu() : Go(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.sh.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Fo(t, e) {
    t.ih.Ee(e.targetId), os(t).vu(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function jo(t, e) {
    t.ih.Ee(e), os(t).Su(e);
}

function zo(t) {
    t.ih = new Wt({
        Be: function(e) {
            return t.Yu.Be(e);
        },
        qe: function(e) {
            return t.Xu.get(e) || null;
        }
    }), os(t).start(), t.sh.Qu()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function Bo(t) {
    return Go(t) && !os(t).lu() && t.Xu.size > 0;
}

function Go(t) {
    return 0 === m(t).Zu.size;
}

function Wo(t) {
    t.ih = void 0;
}

function Qo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return e.Xu.forEach((function(t, n) {
                Fo(e, t);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function Ko(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return Wo(e), 
            // If we still need the watch stream, retry the connection.
            Bo(e) ? (e.sh.Ku(n), zo(e)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            e.sh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function Ho(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s;
        return t.__generator(this, (function(u) {
            switch (u.label) {
              case 0:
                if (e.sh.set("Online" /* Online */), !(n instanceof Bt && 2 /* Removed */ === n.state && n.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                r = n.cause, i = 0, o = n.targetIds, t.label = 1;

                              case 1:
                                return i < o.length ? (s = o[i], e.Xu.has(s) ? [ 4 /*yield*/ , e.Yu.rh(s, r) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                t.sent(), e.Xu.delete(s), e.ih.removeTarget(s), t.label = 3;

                              case 3:
                                t.label = 4;

                              case 4:
                                return i++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(e, n) ];

              case 2:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return i = u.sent(), l("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), i), 
                [ 4 /*yield*/ , Yo(e, i) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (n instanceof jt ? e.ih.pe(n) : n instanceof zt ? e.ih.xe(n) : e.ih.Se(n), r.isEqual(st.min())) return [ 3 /*break*/ , 13 ];
                u.label = 7;

              case 7:
                return u.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , po(e.zu) ];

              case 8:
                return o = u.sent(), r.L(o) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.ih.Me(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.Gt.forEach((function(n, r) {
                        if (n.resumeToken.O() > 0) {
                            var i = t.Xu.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Xu.set(r, i.st(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.zt.forEach((function(e) {
                        var n = t.Xu.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Xu.set(e, n.st(Z.B, n.et)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            jo(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new gt(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            Fo(t, r);
                        }
                    })), t.Yu.oh(n);
                }(e, r) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                u.sent(), u.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return l("RemoteStore", "Failed to raise snapshot:", s = u.sent()), [ 4 /*yield*/ , Yo(e, s) ];

              case 12:
                return u.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function Yo(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i = this;
        return t.__generator(this, (function(o) {
            switch (o.label) {
              case 0:
                if (!yr(n)) throw n;
                // Disable network and raise offline snapshots
                return e.Zu.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Vo(e) ];

              case 1:
                // Disable network and raise offline snapshots
                return o.sent(), e.sh.set("Offline" /* Offline */), r || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                r = function() {
                    return po(e.zu);
                }), 
                // Probe IndexedDB periodically and re-enable network
                e.os.Ds((function() {
                    return t.__awaiter(i, void 0, void 0, (function() {
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return l("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , r() ];

                              case 1:
                                return t.sent(), e.Zu.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Po(e) ];

                              case 2:
                                return t.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function Xo(t, e) {
    return e().catch((function(n) {
        return Yo(t, n, e);
    }));
}

function Zo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, s;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                n = m(e), r = ss(n), i = n.Ju.length > 0 ? n.Ju[n.Ju.length - 1].batchId : -1, t.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return Go(t) && t.Ju.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (n)) return [ 3 /*break*/ , 7 ];
                t.label = 2;

              case 2:
                return t.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , yo(n.zu, i) ];

              case 3:
                return null === (o = t.sent()) ? (0 === n.Ju.length && r.wu(), [ 3 /*break*/ , 7 ]) : (i = o.batchId, 
                function(t, e) {
                    t.Ju.push(e);
                    var n = ss(t);
                    n._u() && n.Cu && n.Nu(e.mutations);
                }(n, o), [ 3 /*break*/ , 6 ]);

              case 4:
                return s = t.sent(), [ 4 /*yield*/ , Yo(n, s) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return Jo(n) && $o(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Jo(t) {
    return Go(t) && !ss(t).lu() && t.Ju.length > 0;
}

function $o(t) {
    ss(t).start();
}

function ts(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return ss(e).$u(), [ 2 /*return*/ ];
        }));
    }));
}

function es(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r, i, o;
        return t.__generator(this, (function(t) {
            // Send the write pipeline now that the stream is established.
            for (n = ss(e), r = 0, i = e.Ju; r < i.length; r++) o = i[r], n.Nu(o.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function ns(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return i = e.Ju.shift(), o = Hr.from(i, n, r), [ 4 /*yield*/ , Xo(e, (function() {
                    return e.Yu.ah(o);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return t.sent(), [ 4 /*yield*/ , Zo(e) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return t.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function rs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(r) {
            switch (r.label) {
              case 0:
                return n && ss(e).Cu ? [ 4 /*yield*/ , function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return wt(i = n.code) && i !== a.ABORTED ? (r = e.Ju.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                ss(e).du(), [ 4 /*yield*/ , Xo(e, (function() {
                                    return e.Yu.uh(r.batchId, n);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return t.sent(), [ 4 /*yield*/ , Zo(e) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                t.sent(), t.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(e, n) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                r.sent(), r.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return Jo(e) && $o(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function is(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return r = m(e), n ? (r.Zu.delete(2 /* IsSecondary */), [ 4 /*yield*/ , Po(r) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return t.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return (i = n) ? [ 3 /*break*/ , 4 ] : (r.Zu.add(2 /* IsSecondary */), [ 4 /*yield*/ , Vo(r) ]);

              case 3:
                t.sent(), i = r.sh.set("Unknown" /* Unknown */), t.label = 4;

              case 4:
                i, t.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function os(e) {
    var n = this;
    return e.hh || (
    // Create stream (but note that it is not started yet).
    e.hh = function(t, e, n) {
        var r = m(t);
        return r.Mu(), new ko(e, r.au, r.credentials, r.serializer, n);
    }(e.Hu, e.os, {
        Vu: Qo.bind(null, e),
        Au: Ko.bind(null, e),
        bu: Ho.bind(null, e)
    }), e.th.push((function(r) {
        return t.__awaiter(n, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return r ? (e.hh.du(), Bo(e) ? zo(e) : e.sh.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , e.hh.stop() ];

                  case 2:
                    t.sent(), Wo(e), t.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), e.hh
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function ss(e) {
    var n = this;
    return e.lh || (
    // Create stream (but note that it is not started yet).
    e.lh = function(t, e, n) {
        var r = m(t);
        return r.Mu(), new Lo(e, r.au, r.credentials, r.serializer, n);
    }(e.Hu, e.os, {
        Vu: ts.bind(null, e),
        Au: rs.bind(null, e),
        xu: es.bind(null, e),
        Fu: ns.bind(null, e)
    }), e.th.push((function(r) {
        return t.__awaiter(n, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return r ? (e.lh.du(), [ 4 /*yield*/ , Zo(e) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , e.lh.stop() ];

                  case 3:
                    t.sent(), e.Ju.length > 0 && (l("RemoteStore", "Stopping write stream with " + e.Ju.length + " pending writes"), 
                    e.Ju = []), t.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), e.lh
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var us = function(t) {
    this.key = t;
}, as = function(t) {
    this.key = t;
}, cs = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this._h = e, this.fh = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Zt = !1, 
        /** Documents in the view but not in the remote target */
        this.dh = Rt(), 
        /** Document Keys that have local changes */
        this.Qt = Rt(), this.wh = Kn(t), this.mh = new Vt(this.wh);
    }
    return Object.defineProperty(t.prototype, "Th", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this._h;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.Eh = function(t, e) {
        var n = this, r = e ? e.Ih : new Ct, i = e ? e.mh : this.mh, o = e ? e.Qt : this.Qt, s = i, u = !1, a = Rn(this.query) && i.size === this.query.limit ? i.last() : null, c = Un(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ut((function(t, e) {
            var h = i.get(t), f = e instanceof Dn ? e : null;
            f && (f = Qn(n.query, f) ? f : null);
            var l = !!h && n.Qt.has(h.key), p = !!f && (f.Ye || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Qt.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.Ah(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.wh(f, a) > 0 || c && n.wh(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), Rn(this.query) || Un(this.query)) for (;s.size > this.query.limit; ) {
            var h = Rn(this.query) ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            mh: s,
            Ih: r,
            Rh: u,
            Qt: o
        };
    }, t.prototype.Ah = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ye && e.hasCommittedMutations && !e.Ye;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.gr = function(t, e, n) {
        var r = this, i = this.mh;
        this.mh = t.mh, this.Qt = t.Qt;
        // Sort changes based on type and query comparator
        var o = t.Ih.qt();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return y();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.wh(t.doc, e.doc);
        })), this.Ph(n);
        var s = e ? this.gh() : [], u = 0 === this.dh.size && this.Zt ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.fh;
        return this.fh = u, 0 !== o.length || a ? {
            snapshot: new Mt(this.query, t.mh, i, o, t.Qt, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            yh: s
        } : {
            yh: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Us = function(t) {
        return this.Zt && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Zt = !1, this.gr({
            mh: this.mh,
            Ih: new Ct,
            Qt: this.Qt,
            Rh: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            yh: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Vh = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this._h.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.mh.has(t) && !this.mh.get(t).Ye;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Ph = function(t) {
        var e = this;
        t && (t.te.forEach((function(t) {
            return e._h = e._h.add(t);
        })), t.ee.forEach((function(t) {})), t.ne.forEach((function(t) {
            return e._h = e._h.delete(t);
        })), this.Zt = t.Zt);
    }, t.prototype.gh = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Zt) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.dh;
        this.dh = Rt(), this.mh.forEach((function(e) {
            t.Vh(e.key) && (t.dh = t.dh.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.dh.has(e) || n.push(new as(e));
        })), this.dh.forEach((function(t) {
            e.has(t) || n.push(new us(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.ph = function(t) {
        this._h = t.kc, this.dh = Rt();
        var e = this.Eh(t.documents);
        return this.gr(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.bh = function() {
        return Mt.Kt(this.query, this.mh, this.Qt, 0 /* Local */ === this.fh);
    }, t;
}(), hs = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, fs = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Sh = !1;
}, ls = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.zu = t, this.Dh = e, this.Ch = n, this.Nh = r, this.currentUser = i, this.Fh = o, 
        this.xh = {}, this.$h = new it((function(t) {
            return Gn(t);
        }), Bn), this.kh = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.Mh = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Oh = new bt(A.i), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Lh = new Map, this.Bh = new Io, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.qh = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Uh = new Map, this.Qh = Ji.Ta(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Wh = void 0;
    }
    return Object.defineProperty(t.prototype, "jh", {
        get: function() {
            return !0 === this.Wh;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function ps(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return r = qs(e), (s = r.$h.get(n)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                i = s.targetId, r.Nh.Mi(i), o = s.view.bh(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , go(r.zu, qn(n)) ];

              case 2:
                return u = t.sent(), a = r.Nh.Mi(u.targetId), i = u.targetId, [ 4 /*yield*/ , ds(r, n, i, "current" === a) ];

              case 3:
                o = t.sent(), r.jh && Mo(r.Dh, u), t.label = 4;

              case 4:
                return [ 2 /*return*/ , o ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function ds(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s, u, a, c, h;
        return t.__generator(this, (function(f) {
            switch (f.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return e.Kh = function(n, r, i) {
                    return function(e, n, r, i) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var o, s, u;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return o = n.view.Eh(r), o.Rh ? [ 4 /*yield*/ , wo(e.zu, n.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var e = t.documents;
                                        return n.view.Eh(e, o);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    o = t.sent(), t.label = 2;

                                  case 2:
                                    return s = i && i.Gt.get(n.targetId), u = n.view.gr(o, 
                                    /* updateLimboDocuments= */ e.jh, s), [ 2 /*return*/ , (Ns(e, n.targetId, u.yh), 
                                    u.snapshot) ];
                                }
                            }));
                        }));
                    }(e, n, r, i);
                }, [ 4 /*yield*/ , wo(e.zu, n, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return o = f.sent(), s = new cs(n, o.kc), u = s.Eh(o.documents), a = Ft.Xt(r, i && "Offline" /* Offline */ !== e.onlineState), 
                c = s.gr(u, 
                /* updateLimboDocuments= */ e.jh, a), Ns(e, r, c.yh), h = new hs(n, r, s), [ 2 /*return*/ , (e.$h.set(n, h), 
                e.kh.has(r) ? e.kh.get(r).push(n) : e.kh.set(r, [ n ]), c.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function vs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return r = m(e), i = r.$h.get(n), (o = r.kh.get(i.targetId)).length > 1 ? [ 2 /*return*/ , (r.kh.set(i.targetId, o.filter((function(t) {
                    return !Bn(t, n);
                }))), void r.$h.delete(n)) ] : r.jh ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                r.Nh.Li(i.targetId), r.Nh.Ni(i.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , mo(r.zu, i.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    r.Nh.qi(i.targetId), qo(r.Dh, i.targetId), Es(r, i.targetId);
                })).catch(bo) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return Es(r, i.targetId), [ 4 /*yield*/ , mo(r.zu, i.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                t.sent(), t.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */
/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */
function ys(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                r = m(e), t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , vo(r.zu, n) ];

              case 2:
                return i = t.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                n.Gt.forEach((function(t, e) {
                    var n = r.Lh.get(e);
                    n && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    g(t.te.size + t.ee.size + t.ne.size <= 1), t.te.size > 0 ? n.Sh = !0 : t.ee.size > 0 ? g(n.Sh) : t.ne.size > 0 && (g(n.Sh), 
                    n.Sh = !1));
                })), [ 4 /*yield*/ , Ss(r, i, n) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , bo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function gs(t, e, n) {
    var r = m(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.jh && 0 /* RemoteStore */ === n || !r.jh && 1 /* SharedClientState */ === n) {
        var i = [];
        r.$h.forEach((function(t, n) {
            var r = n.view.Us(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = m(t);
            n.onlineState = e;
            var r = !1;
            n.Ls.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].Us(e) && (r = !0);
                }
            })), r && Rr(n);
        }(r.Ch, e), i.length && r.xh.bu(i), r.onlineState = e, r.jh && r.Nh.ji(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine The sync engine implementation.
 * @param targetId The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function ms(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u, a, c;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (i = m(e)).Nh.Ui(n, "rejected", r), o = i.Lh.get(n), (s = o && o.key) ? (u = (u = new bt(A.i)).rt(s, new Sn(s, st.min())), 
                a = Rt().add(s), c = new qt(st.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new Tt(H), u, a), [ 4 /*yield*/ , ys(i, c) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return t.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                i.Oh = i.Oh.remove(s), i.Lh.delete(n), Ds(i), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , mo(i.zu, n, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return Es(i, n, r);
                })).catch(bo) ];

              case 3:
                t.sent(), t.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ws(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                r = m(e), i = n.batch.batchId, t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , lo(r.zu, n) ];

              case 2:
                return o = t.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                Is(r, i, /*error=*/ null), bs(r, i), r.Nh.$i(i, "acknowledged"), [ 4 /*yield*/ , Ss(r, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , bo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function _s(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                i = m(e), t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = m(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.vr.Mo(t, e).next((function(e) {
                            return g(null !== e), r = e.keys(), n.vr.Qo(t, e);
                        })).next((function() {
                            return n.vr.Go(t);
                        })).next((function() {
                            return n.xc.$r(t, r);
                        }));
                    }));
                }(i.zu, n) ];

              case 2:
                return o = t.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                Is(i, n, r), bs(i, n), i.Nh.$i(n, "rejected", r), [ 4 /*yield*/ , Ss(i, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , bo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */
/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */
function bs(t, e) {
    (t.Uh.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.Uh.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function Is(t, e, n) {
    var r = m(t), i = r.qh[r.currentUser.Zs()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.qh[r.currentUser.Zs()] = i;
    }
}

function Es(t, e, n) {
    void 0 === n && (n = null), t.Nh.Li(e);
    for (var r = 0, i = t.kh.get(e); r < i.length; r++) {
        var o = i[r];
        t.$h.delete(o), n && t.xh.Gh(o, n);
    }
    t.kh.delete(e), t.jh && t.Bh.Wc(e).forEach((function(e) {
        t.Bh.zo(e) || 
        // We removed the last reference for this key
        Ts(t, e);
    }));
}

function Ts(t, e) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.Oh.get(e);
    null !== n && (qo(t.Dh, n), t.Oh = t.Oh.remove(e), t.Lh.delete(n), Ds(t));
}

function Ns(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof us ? (t.Bh.Fa(o.key, e), As(t, o)) : o instanceof as ? (l("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.Bh.$a(o.key, e), t.Bh.zo(o.key) || 
        // We removed the last reference for this key
        Ts(t, o.key)) : y();
    }
}

function As(t, e) {
    var n = e.key;
    t.Oh.get(n) || (l("SyncEngine", "New document in limbo: " + n), t.Mh.push(n), Ds(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Ds(t) {
    for (;t.Mh.length > 0 && t.Oh.size < t.Fh; ) {
        var e = t.Mh.shift(), n = t.Qh.next();
        t.Lh.set(n, new fs(e)), t.Oh = t.Oh.rt(e, n), Mo(t.Dh, new gt(qn(On(e.path)), n, 2 /* LimboResolution */ , Vr.oi));
    }
}

function Ss(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u;
        return t.__generator(this, (function(a) {
            switch (a.label) {
              case 0:
                return i = m(e), o = [], s = [], u = [], i.$h.m() ? [ 3 /*break*/ , 3 ] : (i.$h.forEach((function(t, e) {
                    u.push(i.Kh(e, n, r).then((function(t) {
                        if (t) {
                            i.jh && i.Nh.Ui(e.targetId, t.fromCache ? "not-current" : "current"), o.push(t);
                            var n = $r.Gr(e.targetId, t);
                            s.push(n);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(u) ]);

              case 1:
                return a.sent(), i.xh.bu(o), [ 4 /*yield*/ , function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s, u, a, c, h, f;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                r = m(e), t.label = 1;

                              case 1:
                                return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return lr.forEach(n, (function(e) {
                                        return lr.forEach(e.jr, (function(n) {
                                            return r.persistence.Co.Fa(t, e.targetId, n);
                                        })).next((function() {
                                            return lr.forEach(e.Kr, (function(n) {
                                                return r.persistence.Co.$a(t, e.targetId, n);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return t.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!yr(i = t.sent())) throw i;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return l("LocalStore", "Failed to update sequence numbers: " + i), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (o = 0, s = n; o < s.length; o++) u = s[o], a = u.targetId, u.fromCache || (c = r.Dc.get(a), 
                                h = c.et, f = c.it(h), 
                                // Advance the last limbo free snapshot version
                                r.Dc = r.Dc.rt(a, f));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(i.zu, s) ];

              case 2:
                a.sent(), a.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function xs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return (r = m(e)).currentUser.isEqual(n) ? [ 3 /*break*/ , 3 ] : (l("SyncEngine", "User change. New user:", n.Zs()), 
                [ 4 /*yield*/ , 
                /**
                 * Tells the LocalStore that the currently authenticated user has changed.
                 *
                 * In response the local store switches the mutation queue to the new user and
                 * returns any resulting document changes.
                 */
                // PORTING NOTE: Android and iOS only return the documents affected by the
                // change.
                function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return r = m(e), i = r.vr, o = r.xc, [ 4 /*yield*/ , r.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                                    // Swap out the mutation queue, grabbing the pending mutation batches
                                    // before and after.
                                    var e;
                                    return r.vr.qo(t).next((function(s) {
                                        return e = s, i = r.persistence.Ic(n), 
                                        // Recreate our LocalDocumentsView using the new
                                        // MutationQueue.
                                        o = new Jr(r.Fc, i, r.persistence.Pc()), i.qo(t);
                                    })).next((function(n) {
                                        for (var r = [], i = [], s = Rt(), u = 0, a = e
                                        // Union the old/new changed keys.
                                        ; u < a.length; u++) {
                                            var c = a[u];
                                            r.push(c.batchId);
                                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                                var l = f[h];
                                                s = s.add(l.key);
                                            }
                                        }
                                        for (var p = 0, d = n; p < d.length; p++) {
                                            var v = d[p];
                                            i.push(v.batchId);
                                            for (var y = 0, g = v.mutations; y < g.length; y++) {
                                                var m = g[y];
                                                s = s.add(m.key);
                                            }
                                        }
                                        // Return the set of all (potentially) changed documents and the list
                                        // of mutation batch IDs that were affected by change.
                                                                                return o.$r(t, s).next((function(t) {
                                            return {
                                                zh: t,
                                                Hh: r,
                                                Yh: i
                                            };
                                        }));
                                    }));
                                })) ];

                              case 1:
                                return s = t.sent(), [ 2 /*return*/ , (r.vr = i, r.xc = o, r.Sc.$c(r.xc), s) ];
                            }
                        }));
                    }));
                }(r.zu, n) ]);

              case 1:
                return i = o.sent(), r.currentUser = n, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.Uh.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new c(a.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.Uh.clear();
                }(r), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                r.Nh.Wi(n, i.Hh, i.Yh), [ 4 /*yield*/ , Ss(r, i.zh) ];

              case 2:
                o.sent(), o.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ks(t, e) {
    var n = m(t), r = n.Lh.get(e);
    if (r && r.Sh) return Rt().add(r.key);
    var i = Rt(), o = n.kh.get(e);
    if (!o) return i;
    for (var s = 0, u = o; s < u.length; s++) {
        var a = u[s], c = n.$h.get(a);
        i = i.$t(c.view.Th);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function Ls(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return [ 4 /*yield*/ , wo((r = m(e)).zu, n.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = t.sent(), o = n.view.ph(i), [ 2 /*return*/ , (r.jh && Ns(r, n.targetId, o.yh), 
                o) ];
            }
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function Os(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return [ 4 /*yield*/ , function(t, e) {
                    var n = m(t), r = m(n.vr);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.Oo(t, e).next((function(e) {
                            return e ? n.xc.$r(t, e) : lr.resolve(null);
                        }));
                    }));
                }((o = m(e)).zu, n) ];

              case 1:
                return null === (s = t.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , Zo(o.Dh) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return t.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === r || "rejected" === r ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                Is(o, n, i || null), function(t, e) {
                    m(m(t).vr).jo(e);
                }(o.zu, n)) : y(), t.label = 4;

              case 4:
                return [ 4 /*yield*/ , Ss(o, s) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                l("SyncEngine", "Cannot apply mutation batch with id: " + n), t.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Rs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c, h;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return qs(r = m(e)), Fs(r), !0 !== n || !0 === r.Wh ? [ 3 /*break*/ , 3 ] : (i = r.Nh.Di(), 
                [ 4 /*yield*/ , Us(r, i.A()) ]);

              case 1:
                return o = t.sent(), r.Wh = !0, [ 4 /*yield*/ , is(r.Dh, !0) ];

              case 2:
                for (t.sent(), s = 0, u = o; s < u.length; s++) a = u[s], Mo(r.Dh, a);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== n || !1 === r.Wh ? [ 3 /*break*/ , 7 ] : (c = [], h = Promise.resolve(), 
                r.kh.forEach((function(t, e) {
                    r.Nh.Bi(e) ? c.push(e) : h = h.then((function() {
                        return Es(r, e), mo(r.zu, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), qo(r.Dh, e);
                })), [ 4 /*yield*/ , h ]);

              case 4:
                return t.sent(), [ 4 /*yield*/ , Us(r, c) ];

              case 5:
                return t.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = m(t);
                    e.Lh.forEach((function(t, n) {
                        qo(e.Dh, n);
                    })), e.Bh.jc(), e.Lh = new Map, e.Oh = new bt(A.i);
                }(r), r.Wh = !1, [ 4 /*yield*/ , is(r.Dh, !1) ];

              case 6:
                t.sent(), t.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Us(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c, h, f, l, p, d, v, y;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                r = m(e), i = [], o = [], s = 0, u = n, t.label = 1;

              case 1:
                return s < u.length ? (a = u[s], c = void 0, (h = r.kh.get(a)) && 0 !== h.length ? [ 4 /*yield*/ , go(r.zu, qn(h[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                c = t.sent(), f = 0, l = h, t.label = 3;

              case 3:
                return f < l.length ? (p = l[f], d = r.$h.get(p), [ 4 /*yield*/ , Ls(r, d) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (v = t.sent()).snapshot && o.push(v.snapshot), t.label = 5;

              case 5:
                return f++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , _o(r.zu, a) ];

              case 8:
                return y = t.sent(), [ 4 /*yield*/ , go(r.zu, y) ];

              case 9:
                return c = t.sent(), [ 4 /*yield*/ , ds(r, Ps(y), a, 
                /*current=*/ !1) ];

              case 10:
                t.sent(), t.label = 11;

              case 11:
                i.push(c), t.label = 12;

              case 12:
                return s++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (r.xh.bu(o), i) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function Ps(t) {
    return Ln(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function Vs(t) {
    var e = m(t);
    return m(m(e.zu).persistence).Vi();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Cs(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s, u;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return (o = m(e)).Wh ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                l("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!o.kh.has(n)) return [ 3 /*break*/ , 8 ];
                switch (r) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , function(t) {
                    var e = m(t), n = m(e.Fc);
                    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
                        return n.ia(t, e.Nc);
                    })).then((function(t) {
                        var n = t.ra, r = t.readTime;
                        return e.Nc = r, n;
                    }));
                }(o.zu) ];

              case 3:
                return s = t.sent(), u = qt.Jt(n, "current" === r), [ 4 /*yield*/ , Ss(o, s, u) ];

              case 4:
                return t.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , mo(o.zu, n, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return t.sent(), Es(o, n, i), [ 3 /*break*/ , 8 ];

              case 7:
                y(), t.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function Ms(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u, a, c, h, f, p, d;
        return t.__generator(this, (function(v) {
            switch (v.label) {
              case 0:
                if (!(i = qs(e)).Wh) return [ 3 /*break*/ , 10 ];
                o = 0, s = n, v.label = 1;

              case 1:
                return o < s.length ? (u = s[o], i.kh.has(u) ? (
                // A target might have been added in a previous attempt
                l("SyncEngine", "Adding an already active target " + u), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , _o(i.zu, u) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return a = v.sent(), [ 4 /*yield*/ , go(i.zu, a) ];

              case 3:
                return c = v.sent(), [ 4 /*yield*/ , ds(i, Ps(a), c.targetId, 
                /*current=*/ !1) ];

              case 4:
                v.sent(), Mo(i.Dh, c), v.label = 5;

              case 5:
                return o++, [ 3 /*break*/ , 1 ];

              case 6:
                h = function(e) {
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return i.kh.has(e) ? [ 4 /*yield*/ , mo(i.zu, e, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                qo(i.Dh, e), Es(i, e);
                            })).catch(bo) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, f = 0, p = r, v.label = 7;

              case 7:
                return f < p.length ? (d = p[f], [ 5 /*yield**/ , h(d) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                v.sent(), v.label = 9;

              case 9:
                return f++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function qs(t) {
    var e = m(t);
    return e.Dh.Yu.oh = ys.bind(null, e), e.Dh.Yu.Be = ks.bind(null, e), e.Dh.Yu.rh = ms.bind(null, e), 
    e.xh.bu = Lr.bind(null, e.Ch), e.xh.Gh = Or.bind(null, e.Ch), e;
}

function Fs(t) {
    var e = m(t);
    return e.Dh.Yu.ah = ws.bind(null, e), e.Dh.Yu.uh = _s.bind(null, e), e;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
 * reading the documents that previously matched a query plus any documents that were
 * edited after the query was last listened to.
 *
 * There are some cases where Index-Free queries are not guaranteed to produce
 * the same results as full collection scans. In these cases, the
 * IndexFreeQueryEngine falls back to full query processing. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of Limbo documents.
 */ var js = /** @class */ function() {
    function t() {}
    return t.prototype.$c = function(t) {
        this.Jh = t;
    }, t.prototype.Or = function(t, e, r, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.rn.length || 1 === t.rn.length && t.rn[0].field.p());
        }(e) || r.isEqual(st.min()) ? this.Xh(t, e) : this.Jh.$r(t, i).next((function(s) {
            var u = o.Zh(e, s);
            return (Rn(e) || Un(e)) && o.Rh(e.on, u, i, r) ? o.Xh(t, e) : (f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Wn(e)), 
            o.Jh.Or(t, e, r).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.rt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Zh = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Tt(Kn(t));
        return e.forEach((function(e, r) {
            r instanceof Dn && Qn(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.Rh = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.L(r) > 0);
    }, t.prototype.Xh = function(t, e) {
        return f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Using full collection scan to execute query:", Wn(e)), 
        this.Jh.Or(t, e, st.min());
    }, t;
}(), zs = /** @class */ function() {
    function t(t, e) {
        this.Sr = t, this.Co = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.vr = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.tl = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.el = new Tt(Eo.Oc);
    }
    return t.prototype.xo = function(t) {
        return lr.resolve(0 === this.vr.length);
    }, t.prototype.$o = function(t, e, n, r) {
        var i = this.tl;
        this.tl++, this.vr.length > 0 && this.vr[this.vr.length - 1];
        var o = new Kr(i, e, n, r);
        this.vr.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.el = this.el.add(new Eo(a.key, i)), this.Sr.ko(t, a.key.path.h());
        }
        return lr.resolve(o);
    }, t.prototype.Mo = function(t, e) {
        return lr.resolve(this.nl(e));
    }, t.prototype.Lo = function(t, e) {
        var n = e + 1, r = this.sl(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return lr.resolve(this.vr.length > i ? this.vr[i] : null);
    }, t.prototype.Bo = function() {
        return lr.resolve(0 === this.vr.length ? -1 : this.tl - 1);
    }, t.prototype.qo = function(t) {
        return lr.resolve(this.vr.slice());
    }, t.prototype.Cr = function(t, e) {
        var n = this, r = new Eo(e, 0), i = new Eo(e, Number.POSITIVE_INFINITY), o = [];
        return this.el.Nt([ r, i ], (function(t) {
            var e = n.nl(t.Gc);
            o.push(e);
        })), lr.resolve(o);
    }, t.prototype.Mr = function(t, e) {
        var n = this, r = new Tt(H);
        return e.forEach((function(t) {
            var e = new Eo(t, 0), i = new Eo(t, Number.POSITIVE_INFINITY);
            n.el.Nt([ e, i ], (function(t) {
                r = r.add(t.Gc);
            }));
        })), lr.resolve(this.il(r));
    }, t.prototype.Qr = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                A.F(i) || (i = i.child(""));
        var o = new Eo(new A(i), 0), s = new Tt(H);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.el.Ft((function(t) {
            var e = t.key.path;
            return !!n.T(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.Gc)), !0);
        }), o), lr.resolve(this.il(s));
    }, t.prototype.il = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.nl(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Qo = function(t, e) {
        var n = this;
        g(0 === this.rl(e.batchId, "removed")), this.vr.shift();
        var r = this.el;
        return lr.forEach(e.mutations, (function(i) {
            var o = new Eo(i.key, e.batchId);
            return r = r.delete(o), n.Co.Ko(t, i.key);
        })).next((function() {
            n.el = r;
        }));
    }, t.prototype.jo = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.zo = function(t, e) {
        var n = new Eo(e, 0), r = this.el.xt(n);
        return lr.resolve(e.isEqual(r && r.key));
    }, t.prototype.Go = function(t) {
        return this.vr.length, lr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.rl = function(t, e) {
        return this.sl(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.sl = function(t) {
        return 0 === this.vr.length ? 0 : t - this.vr[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.nl = function(t) {
        var e = this.sl(t);
        return e < 0 || e >= this.vr.length ? null : this.vr[e];
    }, t;
}(), Bs = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Sr = t, this.ol = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new bt(A.i), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Tr = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.ol(e);
        return this.docs = this.docs.rt(r, {
            Zo: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Sr.ko(t, r.path.h());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Ir = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.Ar = function(t, e) {
        var n = this.docs.get(e);
        return lr.resolve(n ? n.Zo : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = St();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.rt(t, e ? e.Zo : null);
        })), lr.resolve(r);
    }, t.prototype.Or = function(t, e, n) {
        for (var r = kt(), i = new A(e.path.child("")), o = this.docs._t(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.It(); ) {
            var s = o.Et(), u = s.key, a = s.value, c = a.Zo, h = a.readTime;
            if (!e.path.T(u.path)) break;
            h.L(n) <= 0 || c instanceof Dn && Qn(e, c) && (r = r.rt(c.key, c));
        }
        return lr.resolve(r);
    }, t.prototype.al = function(t, e) {
        return lr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.aa = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.ca(this);
    }, t.prototype.ha = function(t) {
        return lr.resolve(this.size);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Bs.ca = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).la = t, n;
    }
    return t.__extends(n, e), n.prototype.gr = function(t) {
        var e = this, n = [];
        return this.dr.forEach((function(r, i) {
            i ? n.push(e.la.Tr(t, i, e.readTime)) : e.la.Ir(r);
        })), lr.xn(n);
    }, n.prototype.Rr = function(t, e) {
        return this.la.Ar(t, e);
    }, n.prototype.Pr = function(t, e) {
        return this.la.getEntries(t, e);
    }, n;
}(Yr);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gs = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.cl = new it((function(t) {
            return lt(t);
        }), pt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = st.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ul = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.hl = new Io, this.targetCount = 0, this.ll = Ji.ma();
    }
    return t.prototype.De = function(t, e) {
        return this.cl.forEach((function(t, n) {
            return e(n);
        })), lr.resolve();
    }, t.prototype.Ra = function(t) {
        return lr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Pa = function(t) {
        return lr.resolve(this.ul);
    }, t.prototype.Ea = function(t) {
        return this.highestTargetId = this.ll.next(), lr.resolve(this.highestTargetId);
    }, t.prototype.ga = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ul && (this.ul = e), 
        lr.resolve();
    }, t.prototype.Va = function(t) {
        this.cl.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.ll = new Ji(e), this.highestTargetId = e), t.sequenceNumber > this.ul && (this.ul = t.sequenceNumber);
    }, t.prototype.ya = function(t, e) {
        return this.Va(e), this.targetCount += 1, lr.resolve();
    }, t.prototype.ba = function(t, e) {
        return this.Va(e), lr.resolve();
    }, t.prototype.va = function(t, e) {
        return this.cl.delete(e.target), this.hl.Wc(e.targetId), this.targetCount -= 1, 
        lr.resolve();
    }, t.prototype.Vo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.cl.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.cl.delete(s), o.push(r.Sa(t, u.targetId)), 
            i++);
        })), lr.xn(o).next((function() {
            return i;
        }));
    }, t.prototype.Da = function(t) {
        return lr.resolve(this.targetCount);
    }, t.prototype.Ca = function(t, e) {
        var n = this.cl.get(e) || null;
        return lr.resolve(n);
    }, t.prototype.Na = function(t, e, n) {
        return this.hl.qc(e, n), lr.resolve();
    }, t.prototype.xa = function(t, e, n) {
        this.hl.Qc(e, n);
        var r = this.persistence.Co, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Ko(t, e));
        })), lr.xn(i);
    }, t.prototype.Sa = function(t, e) {
        return this.hl.Wc(e), lr.resolve();
    }, t.prototype.ka = function(t, e) {
        var n = this.hl.Kc(e);
        return lr.resolve(n);
    }, t.prototype.zo = function(t, e) {
        return lr.resolve(this.hl.zo(e));
    }, t;
}(), Ws = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this._l = {}, this.Ba = new Vr(0), this.qa = !1, this.qa = !0, this.Co = t(this), 
        this.Ha = new Gs(this), this.Sr = new Li, this.br = new Bs(this.Sr, (function(t) {
            return e.Co.fl(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Si = function() {
        // No durable state to ensure is closed on shutdown.
        return this.qa = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Ti", {
        get: function() {
            return this.qa;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.nc = function() {
        // No op.
    }, t.prototype.sc = function() {
        // No op.
    }, t.prototype.Pc = function() {
        return this.Sr;
    }, t.prototype.Ic = function(t) {
        var e = this._l[t.Zs()];
        return e || (e = new zs(this.Sr, this.Co), this._l[t.Zs()] = e), e;
    }, t.prototype.Ac = function() {
        return this.Ha;
    }, t.prototype.Rc = function() {
        return this.br;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        l("MemoryPersistence", "Starting transaction:", t);
        var i = new Qs(this.Ba.next());
        return this.Co.dl(), n(i).next((function(t) {
            return r.Co.wl(i).next((function() {
                return t;
            }));
        })).Nn().then((function(t) {
            return i.pr(), t;
        }));
    }, t.prototype.ml = function(t, e) {
        return lr.$n(Object.values(this._l).map((function(n) {
            return function() {
                return n.zo(t, e);
            };
        })));
    }, t;
}(), Qs = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Ma = t, n;
    }
    return t.__extends(n, e), n;
}(Zr), Ks = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Tl = new Io, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.El = null;
    }
    return t.Il = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Al", {
        get: function() {
            if (this.El) return this.El;
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Fa = function(t, e, n) {
        return this.Tl.Fa(n, e), this.Al.delete(n.toString()), lr.resolve();
    }, t.prototype.$a = function(t, e, n) {
        return this.Tl.$a(n, e), this.Al.add(n.toString()), lr.resolve();
    }, t.prototype.Ko = function(t, e) {
        return this.Al.add(e.toString()), lr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Tl.Wc(e.targetId).forEach((function(t) {
            return n.Al.add(t.toString());
        }));
        var r = this.persistence.Ac();
        return r.ka(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.Al.add(t.toString());
            }));
        })).next((function() {
            return r.va(t, e);
        }));
    }, t.prototype.dl = function() {
        this.El = new Set;
    }, t.prototype.wl = function(t) {
        var e = this, n = this.persistence.Rc().aa();
        // Remove newly orphaned documents.
                return lr.forEach(this.Al, (function(r) {
            var i = A.D(r);
            return e.Rl(t, i).next((function(t) {
                t || n.Ir(i);
            }));
        })).next((function() {
            return e.El = null, n.apply(t);
        }));
    }, t.prototype.vc = function(t, e) {
        var n = this;
        return this.Rl(t, e).next((function(t) {
            t ? n.Al.delete(e.toString()) : n.Al.add(e.toString());
        }));
    }, t.prototype.fl = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Rl = function(t, e) {
        var n = this;
        return lr.$n([ function() {
            return lr.resolve(n.Tl.zo(e));
        }, function() {
            return n.persistence.Ac().zo(t, e);
        }, function() {
            return n.persistence.ml(t, e);
        } ]);
    }, t;
}(), Hs = /** @class */ function() {
    function t(t) {
        this.Pl = t.Pl, this.gl = t.gl;
    }
    return t.prototype.Vu = function(t) {
        this.yl = t;
    }, t.prototype.Au = function(t) {
        this.Vl = t;
    }, t.prototype.onMessage = function(t) {
        this.pl = t;
    }, t.prototype.close = function() {
        this.gl();
    }, t.prototype.send = function(t) {
        this.Pl(t);
    }, t.prototype.bl = function() {
        this.yl();
    }, t.prototype.vl = function(t) {
        this.Vl(t);
    }, t.prototype.Sl = function(t) {
        this.pl(t);
    }, t;
}(), Ys = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, Xs = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return t.__extends(n, e), n.prototype.$l = function(t, e, n, r) {
        return new Promise((function(o, s) {
            var u = new i.XhrIo;
            u.listenOnce(i.EventType.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case i.ErrorCode.NO_ERROR:
                        var e = u.getResponseJson();
                        l("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case i.ErrorCode.TIMEOUT:
                        l("Connection", 'RPC "' + t + '" timed out'), s(new c(a.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case i.ErrorCode.HTTP_ERROR:
                        var n = u.getStatus();
                        if (l("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var h = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(a).indexOf(e) >= 0 ? e : a.UNKNOWN;
                                }(r.status);
                                s(new c(h, r.message));
                            } else s(new c(a.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        s(new c(a.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        y();
                    }
                } finally {
                    l("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var h = JSON.stringify(r);
            u.send(e, "POST", h, n, 15);
        }));
    }, n.prototype.pu = function(t, e) {
        var n = [ this.Cl, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], o = i.createWebChannelTransport(), s = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.U.projectId + "/databases/" + this.U.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.xl(s.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        r.isMobileCordova() || r.isReactNative() || r.isElectron() || r.isIE() || r.isUWP() || r.isBrowserExtension() || (s.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        l("Connection", "Creating WebChannel: " + u, s);
        var h = o.createWebChannel(u, s), f = !1, p = !1, v = new Hs({
            Pl: function(t) {
                p ? l("Connection", "Not sending because WebChannel is closed:", t) : (f || (l("Connection", "Opening WebChannel transport."), 
                h.open(), f = !0), l("Connection", "WebChannel sending:", t), h.send(t));
            },
            gl: function() {
                return h.close();
            }
        }), y = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            h.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return y(i.WebChannel.EventType.OPEN, (function() {
            p || l("Connection", "WebChannel transport opened.");
        })), y(i.WebChannel.EventType.CLOSE, (function() {
            p || (p = !0, l("Connection", "WebChannel transport closed"), v.vl());
        })), y(i.WebChannel.EventType.ERROR, (function(t) {
            p || (p = !0, d("Connection", "WebChannel transport errored:", t), v.vl(new c(a.UNAVAILABLE, "The operation could not be completed")));
        })), y(i.WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!p) {
                var n = t.data[0];
                g(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    l("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = vt[t];
                        if (void 0 !== e) return _t(e);
                    }(o), u = i.message;
                    void 0 === s && (s = a.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    p = !0, v.vl(new c(s, u)), h.close();
                } else l("Connection", "WebChannel received:", n), v.Sl(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            v.bl();
        }), 0), v;
    }, n;
}(/** @class */ function() {
    function t(t) {
        this.Dl = t, this.U = t.U;
        var e = t.ssl ? "https" : "http";
        this.Cl = e + "://" + t.host, this.Nl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
    }
    return t.prototype.Ou = function(t, e, n, r) {
        var i = this.Fl(t, e);
        l("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.xl(o, r), this.$l(t, i, o, n).then((function(t) {
            return l("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw d("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.Lu = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ou(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.xl = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.21.0", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.zc) e.zc.hasOwnProperty(n) && (t[n] = e.zc[n]);
    }, t.prototype.Fl = function(t, e) {
        var n = Ys[t];
        return this.Cl + "/v1/" + e + ":" + n;
    }, t;
}()), Zs = /** @class */ function() {
    function t() {
        var t = this;
        this.kl = function() {
            return t.Ml();
        }, this.Ol = function() {
            return t.Ll();
        }, this.Bl = [], this.ql();
    }
    return t.prototype.nh = function(t) {
        this.Bl.push(t);
    }, t.prototype.Si = function() {
        window.removeEventListener("online", this.kl), window.removeEventListener("offline", this.Ol);
    }, t.prototype.ql = function() {
        window.addEventListener("online", this.kl), window.addEventListener("offline", this.Ol);
    }, t.prototype.Ml = function() {
        l("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Bl; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Ll = function() {
        l("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Bl; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.On = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Js = /** @class */ function() {
    function t() {}
    return t.prototype.nh = function(t) {
        // No-op.
    }, t.prototype.Si = function() {
        // No-op.
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $s(t) {
    return new de(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var tu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", eu = /** @class */ function() {
    function e() {}
    return e.prototype.initialize = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Nh = this.Ul(e), this.persistence = this.Ql(e), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return t.sent(), this.Wl = this.jl(e), this.zu = this.Kl(e), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.jl = function(t) {
        return null;
    }, e.prototype.Kl = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new js, r = t.Gl, new fo(e, n, r);
        var e, n, r;
    }, e.prototype.Ql = function(t) {
        if (t.persistenceSettings.zl) throw new c(a.FAILED_PRECONDITION, tu);
        return new Ws(Ks.Il);
    }, e.prototype.Ul = function(t) {
        return new Qr;
    }, e.prototype.terminate = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Wl && this.Wl.stop(), [ 4 /*yield*/ , this.Nh.Si() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.Si() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.clearPersistence = function(t, e) {
        throw new c(a.FAILED_PRECONDITION, tu);
    }, e;
}(), nu = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.initialize = function(n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return t.__generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, n) ];

                  case 1:
                    return o.sent(), r = this.Hl._i, this.Nh instanceof Wr ? (this.Nh._i = {
                        tr: Os.bind(null, r),
                        er: Cs.bind(null, r),
                        nr: Ms.bind(null, r),
                        Vi: Vs.bind(null, r)
                    }, [ 4 /*yield*/ , this.Nh.start() ]) : [ 3 /*break*/ , 3 ];

                  case 2:
                    o.sent(), o.label = 3;

                  case 3:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.ec((function(e) {
                        return t.__awaiter(i, void 0, void 0, (function() {
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , Rs(this.Hl._i, e) ];

                                  case 1:
                                    return t.sent(), this.Wl && (e && !this.Wl.Ti ? this.Wl.start(this.zu) : e || this.Wl.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return o.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Ul = function(t) {
        if (t.persistenceSettings.zl && t.persistenceSettings.synchronizeTabs) {
            var e = Ir();
            if (!Wr.On(e)) throw new c(a.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            var n = ho(t.Dl.U, t.Dl.persistenceKey);
            return new Wr(e, t.os, n, t.clientId, t.Gl);
        }
        return new Qr;
    }, n;
}(/** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Hl = t, n;
    }
    return t.__extends(n, e), n.prototype.initialize = function(n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, n) ];

                  case 1:
                    return r.sent(), [ 4 /*yield*/ , function(e) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var n, r;
                            return t.__generator(this, (function(t) {
                                return n = m(e), r = m(n.Fc), [ 2 /*return*/ , n.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                                    return r.oa(t);
                                })).then((function(t) {
                                    n.Nc = t;
                                })) ];
                            }));
                        }));
                    }(this.zu) ];

                  case 2:
                    return r.sent(), [ 4 /*yield*/ , this.Hl.initialize(this, n) ];

                  case 3:
                    // Enqueue writes from a previous session
                    return r.sent(), [ 4 /*yield*/ , Fs(this.Hl._i) ];

                  case 4:
                    // Enqueue writes from a previous session
                    return r.sent(), [ 4 /*yield*/ , Zo(this.Hl.Dh) ];

                  case 5:
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.jl = function(t) {
        var e = this.persistence.Co.do;
        return new ii(e, t.os);
    }, n.prototype.Ql = function(t) {
        var e = ho(t.Dl.U, t.Dl.persistenceKey), n = $s(t.Dl.U);
        return new oo(t.persistenceSettings.synchronizeTabs, e, t.clientId, ri.oo(t.persistenceSettings.cacheSizeBytes), t.os, Ir(), Er(), n, this.Nh, t.persistenceSettings.La);
    }, n.prototype.Ul = function(t) {
        return new Qr;
    }, n.prototype.clearPersistence = function(e, n) {
        return function(e) {
            return t.__awaiter(this, void 0, void 0, (function() {
                var n;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return pr.On() ? (n = e + "main", [ 4 /*yield*/ , pr.delete(n) ]) : [ 2 /*return*/ , Promise.resolve() ];

                      case 1:
                        return t.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(ho(e, n));
    }, n;
}(eu)), ru = /** @class */ function() {
    function e() {}
    return e.prototype.initialize = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var r = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.zu ? [ 3 /*break*/ , 2 ] : (this.zu = e.zu, this.Nh = e.Nh, this.Hu = this.Yl(n), 
                    this.Dh = this.Jl(n), this.Ch = this.Xl(n), this._i = this.Zl(n), this.Nh.fi = function(t) {
                        return gs(r._i, t, 1 /* SharedClientState */);
                    }, this.Dh.Yu.t_ = xs.bind(null, this._i), [ 4 /*yield*/ , is(this.Dh, this._i.jh) ]);

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Xl = function(t) {
        return new Sr;
    }, e.prototype.Yl = function(t) {
        var e, n = $s(t.Dl.U), r = (e = t.Dl, new Xs(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new Oo(t, e, n);
        }(t.credentials, r, n);
    }, e.prototype.Jl = function(t) {
        var e, n, r, i, o, s = this;
        return e = this.zu, n = this.Hu, r = t.os, i = function(t) {
            return gs(s._i, t, 0 /* RemoteStore */);
        }, o = Zs.On() ? new Zs : new Js, new Uo(e, n, r, i, o);
    }, e.prototype.Zl = function(t) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, s) {
            var u = new ls(t, e, n, r, i, o);
            return s && (u.Wh = !0), u;
        }(this.zu, this.Dh, this.Ch, this.Nh, t.Gl, t.Fh, !t.persistenceSettings.zl || !t.persistenceSettings.synchronizeTabs);
    }, e.prototype.terminate = function() {
        return Co(this.Dh);
    }, e;
}(), iu = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.e_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.e_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.n_ = function() {
        this.muted = !0;
    }, t.prototype.e_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), ou = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new c(a.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + W(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (L("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new c(a.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.s_ = new N(t);
}, su = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, t) || this;
    }
    return t.__extends(n, e), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(N.v().R());
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw z("isEqual", "FieldPath", 1, t);
        return this.s_.isEqual(t.s_);
    }, n;
}(ou), uu = new RegExp("[~\\*/\\[\\]]"), au = function() {
    /** A pointer to the implementing class. */
    this.i_ = this;
}, cu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).r_ = t, n;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        if (2 /* MergeSet */ !== t.a_) throw 1 /* Update */ === t.a_ ? t.c_(this.r_ + "() can only appear at the top level of your update data") : t.c_(this.r_ + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Qe.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(au);

/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */
function hu(t, e, n) {
    return new Eu({
        a_: 3 /* Argument */ ,
        u_: e.settings.u_,
        methodName: t.r_,
        h_: n
    }, e.U, e.serializer, e.ignoreUndefinedProperties);
}

var fu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).r_ = t, n;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        return new on(t.path, new Ye);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(au), lu = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).r_ = t, r.l_ = n, r;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        var e = hu(this, t, 
        /*array=*/ !0), n = this.l_.map((function(t) {
            return xu(t, e);
        })), r = new Xe(n);
        return new on(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(au), pu = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).r_ = t, r.l_ = n, r;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        var e = hu(this, t, 
        /*array=*/ !0), n = this.l_.map((function(t) {
            return xu(t, e);
        })), r = new Je(n);
        return new on(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(au), du = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).r_ = t, r.__ = n, r;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        var e = new tn(t.serializer, ge(t.serializer, this.__));
        return new on(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(au), vu = /** @class */ function(e) {
    function n() {
        return e.call(this) || this;
    }
    return t.__extends(n, e), n.delete = function() {
        return D("FieldValue.delete", arguments), new yu(new cu("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return D("FieldValue.serverTimestamp", arguments), new yu(new fu("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return x("FieldValue.arrayUnion", arguments, 1), new yu(new lu("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return x("FieldValue.arrayRemove", arguments, 1), new yu(new pu("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return L("FieldValue.increment", "number", 1, t), S("FieldValue.increment", arguments, 1), 
        new yu(new du("FieldValue.increment", t));
    }, n;
}(au), yu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).i_ = t, n.r_ = t.r_, n;
    }
    return t.__extends(n, e), n.prototype.o_ = function(t) {
        return this.i_.o_(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.i_.isEqual(t.i_);
    }, n;
}(vu), gu = /** @class */ function() {
    function t(t, e) {
        if (S("GeoPoint", arguments, 2), L("GeoPoint", "number", 1, t), L("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new c(a.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(a.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.f_ = t, this.d_ = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.f_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.d_;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.f_ === t.f_ && this.d_ === t.d_;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.f_,
            longitude: this.d_
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.H = function(t) {
        return H(this.f_, t.f_) || H(this.d_, t.d_);
    }, t;
}(), mu = /^__.*__$/, wu = function(t, e, n) {
    this.w_ = t, this.m_ = e, this.T_ = n;
}, _u = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Qe = e, this.fieldTransforms = n;
    }
    return t.prototype.E_ = function(t, e) {
        var n = [];
        return null !== this.Qe ? n.push(new yn(t, this.data, this.Qe, e)) : n.push(new vn(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new mn(t, this.fieldTransforms)), n;
    }, t;
}(), bu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Qe = e, this.fieldTransforms = n;
    }
    return t.prototype.E_ = function(t, e) {
        var n = [ new yn(t, this.data, this.Qe, e) ];
        return this.fieldTransforms.length > 0 && n.push(new mn(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function Iu(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw y();
    }
}

/** A "context" object passed around while parsing user data. */ var Eu = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.U = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.I_(), this.fieldTransforms = i || [], this.Qe = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "a_", {
        get: function() {
            return this.settings.a_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.A_ = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Qe);
    }, t.prototype.R_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.A_({
            path: n,
            h_: !1
        });
        return r.P_(t), r;
    }, t.prototype.g_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.A_({
            path: n,
            h_: !1
        });
        return r.I_(), r;
    }, t.prototype.y_ = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.A_({
            path: void 0,
            h_: !0
        });
    }, t.prototype.c_ = function(t) {
        return Pu(t, this.settings.methodName, this.settings.V_ || !1, this.path, this.settings.u_);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Qe.find((function(e) {
            return t.T(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.T(e.field);
        }));
    }, t.prototype.I_ = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.P_(this.path.get(t));
    }, t.prototype.P_ = function(t) {
        if (0 === t.length) throw this.c_("Document fields must not be empty");
        if (Iu(this.a_) && mu.test(t)) throw this.c_('Document fields cannot begin and end with "__"');
    }, t;
}(), Tu = /** @class */ function() {
    function t(t, e, n) {
        this.U = t, this.ignoreUndefinedProperties = e, this.serializer = n || $s(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.p_ = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Eu({
            a_: t,
            methodName: e,
            u_: n,
            path: N.g(),
            h_: !1,
            V_: r
        }, this.U, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function Nu(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.p_(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Ou("Data must be an object, but it was:", s, r);
    var u, h, f = ku(r, s);
    if (o.merge) u = new rn(s.Qe), h = s.fieldTransforms; else if (o.mergeFields) {
        for (var l = [], p = 0, d = o.mergeFields; p < d.length; p++) {
            var v = d[p], g = void 0;
            if (v instanceof ou) g = v.s_; else {
                if ("string" != typeof v) throw y();
                g = Uu(e, v, n);
            }
            if (!s.contains(g)) throw new c(a.INVALID_ARGUMENT, "Field '" + g + "' is specified in your field mask but missing from your input data.");
            Vu(l, g) || l.push(g);
        }
        u = new rn(l), h = s.fieldTransforms.filter((function(t) {
            return u.He(t.field);
        }));
    } else u = null, h = s.fieldTransforms;
    return new _u(new En(f), u, h);
}

/** Parse update data from an update() call. */ function Au(t, e, n, r) {
    var i = t.p_(1 /* Update */ , e, n);
    Ou("Data must be an object, but it was:", i, r);
    var o = [], s = new Tn;
    _(r, (function(t, r) {
        var u = Uu(e, t, n), a = i.g_(u);
        if (r instanceof au && r.i_ instanceof cu) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(u); else {
            var c = xu(r, a);
            null != c && (o.push(u), s.set(u, c));
        }
    }));
    var u = new rn(o);
    return new bu(s.Je(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Du(t, e, n, r, i, o) {
    var s = t.p_(1 /* Update */ , e, n), u = [ Ru(e, r, n) ], h = [ i ];
    if (o.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var f = 0; f < o.length; f += 2) u.push(Ru(e, o[f])), h.push(o[f + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var l = [], p = new Tn, d = u.length - 1; d >= 0; --d) if (!Vu(l, u[d])) {
        var v = u[d], y = h[d], g = s.g_(v);
        if (y instanceof au && y.i_ instanceof cu) 
        // Add it to the field mask, but don't add anything to updateData.
        l.push(v); else {
            var m = xu(y, g);
            null != m && (l.push(v), p.set(v, m));
        }
    }
    var w = new rn(l);
    return new bu(p.Je(), w, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Su(t, e, n, r) {
    return void 0 === r && (r = !1), xu(n, t.p_(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function xu(t, e) {
    if (Lu(t)) return Ou("Unsupported field value:", e, t), ku(t, e);
    if (t instanceof au) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Iu(e.a_)) throw e.c_(t.r_ + "() can only be used with update() and set()");
        if (!e.path) throw e.c_(t.r_ + "() is not currently supported inside arrays");
        var n = t.o_(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Qe.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.h_ && 4 /* ArrayArgument */ !== e.a_) throw e.c_("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = xu(o[i], e.y_(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return ge(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = ot.fromDate(t);
            return {
                timestampValue: me(e.serializer, n)
            };
        }
        if (t instanceof ot) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new ot(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: me(e.serializer, r)
            };
        }
        if (t instanceof gu) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof J) return {
            bytesValue: we(e.serializer, t.q)
        };
        if (t instanceof wu) {
            var i = e.U, o = t.w_;
            if (!o.isEqual(i)) throw e.c_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: Ie(t.w_ || e.U, t.m_.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.c_("Unsupported field value: " + q(t));
    }(t, e);
}

function ku(t, e) {
    var n = {};
    return b(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Qe.push(e.path) : _(t, (function(t, r) {
        var i = xu(r, e.R_(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Lu(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ot || t instanceof gu || t instanceof J || t instanceof wu || t instanceof au);
}

function Ou(t, e, n) {
    if (!Lu(n) || !M(n)) {
        var r = q(n);
        throw "an object" === r ? e.c_(t + " a custom object") : e.c_(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Ru(t, e, n) {
    if (e instanceof ou) return e.s_;
    if ("string" == typeof e) return Uu(t, e);
    throw Pu("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */ function Uu(e, n, r) {
    try {
        return function(e) {
            if (e.search(uu) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (su.bind.apply(su, t.__spreadArrays([ void 0 ], e.split("."))));
            } catch (t) {
                throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).s_;
    } catch (n) {
        throw Pu((i = n) instanceof Error ? i.message : i.toString(), e, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, r);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Pu(t, e, n, r, i) {
    var o = r && !r.m(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var h = "";
    return (o || s) && (h += " (found", o && (h += " in field " + r), s && (h += " in document " + i), 
    h += ")"), new c(a.INVALID_ARGUMENT, (u += ". ") + t + h);
}

function Vu(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var Cu = /** @class */ function() {
    function e(t) {
        this.Hu = t, 
        // The version of each document that was read during this transaction.
        this.b_ = new Map, this.mutations = [], this.v_ = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.S_ = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.D_ = new Set;
    }
    return e.prototype.C_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return t.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.N_(), this.mutations.length > 0) throw new c(a.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(e, n) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var r, i, o, s, u, a;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return r = m(e), i = Se(r.serializer) + "/documents", o = {
                                        documents: n.map((function(t) {
                                            return Te(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.Lu("BatchGetDocuments", i, o) ];

                                  case 1:
                                    return s = t.sent(), u = new Map, s.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                g(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Ne(t, e.found.name), r = be(e.found.updateTime), i = new En({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new Dn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                g(!!e.missing), g(!!e.readTime);
                                                var n = Ne(t, e.missing), r = be(e.readTime);
                                                return new Sn(n, r);
                                            }(t, e) : y();
                                        }(r.serializer, t);
                                        u.set(e.key.toString(), e);
                                    })), a = [], [ 2 /*return*/ , (n.forEach((function(t) {
                                        var e = u.get(t.toString());
                                        g(!!e), a.push(e);
                                    })), a) ];
                                }
                            }));
                        }));
                    }(this.Hu, e) ];

                  case 1:
                    return [ 2 /*return*/ , ((n = i.sent()).forEach((function(t) {
                        t instanceof Sn || t instanceof Dn ? r.F_(t) : y();
                    })), n) ];
                }
            }));
        }));
    }, e.prototype.set = function(t, e) {
        this.write(e.E_(t, this.Ke(t))), this.D_.add(t.toString());
    }, e.prototype.update = function(t, e) {
        try {
            this.write(e.E_(t, this.x_(t)));
        } catch (t) {
            this.S_ = t;
        }
        this.D_.add(t.toString());
    }, e.prototype.delete = function(t) {
        this.write([ new bn(t, this.Ke(t)) ]), this.D_.add(t.toString());
    }, e.prototype.commit = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.N_(), this.S_) throw this.S_;
                    return e = this.b_, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(t) {
                        e.delete(t.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    e.forEach((function(t, e) {
                        var r = A.D(e);
                        n.mutations.push(new In(r, n.Ke(r)));
                    })), [ 4 /*yield*/ , function(e, n) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var r, i, o;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return r = m(e), i = Se(r.serializer) + "/documents", o = {
                                        writes: n.map((function(t) {
                                            return Le(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.Ou("Commit", i, o) ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Hu, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return r.sent(), this.v_ = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.F_ = function(t) {
        var e;
        if (t instanceof Dn) e = t.version; else {
            if (!(t instanceof Sn)) throw y();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = st.min();
        }
        var n = this.b_.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new c(a.ABORTED, "Document version changed between two reads.");
        } else this.b_.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    e.prototype.Ke = function(t) {
        var e = this.b_.get(t.toString());
        return !this.D_.has(t.toString()) && e ? un.updateTime(e) : un.Ge();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    e.prototype.x_ = function(t) {
        var e = this.b_.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.D_.has(t.toString()) && e) {
            if (e.isEqual(st.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(a.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return un.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return un.exists(!0);
    }, e.prototype.write = function(t) {
        this.N_(), this.mutations = this.mutations.concat(t);
    }, e.prototype.N_ = function() {}, e;
}(), Mu = /** @class */ function() {
    function e(t, e, n, r) {
        this.os = t, this.Hu = e, this.updateFunction = n, this.hs = r, this.k_ = 5, this.gs = new fr(this.os, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return e.prototype.run = function() {
        this.M_();
    }, e.prototype.M_ = function() {
        var e = this;
        this.gs.Rn((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                var e, n, r = this;
                return t.__generator(this, (function(t) {
                    return e = new Cu(this.Hu), (n = this.O_(e)) && n.then((function(t) {
                        r.os.ds((function() {
                            return e.commit().then((function() {
                                r.hs.resolve(t);
                            })).catch((function(t) {
                                r.L_(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.L_(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, e.prototype.O_ = function(t) {
        try {
            var e = this.updateFunction(t);
            return !ut(e) && e.catch && e.then ? e : (this.hs.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.hs.reject(t), null;
        }
    }, e.prototype.L_ = function(t) {
        var e = this;
        this.k_ > 0 && this.B_(t) ? (this.k_ -= 1, this.os.ds((function() {
            return e.M_(), Promise.resolve();
        }))) : this.hs.reject(t);
    }, e.prototype.B_ = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !wt(e);
        }
        return !1;
    }, e;
}(), qu = /** @class */ function() {
    function e(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.credentials = t, this.os = e, this.clientId = K.k(), 
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        this.q_ = new hr
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param databaseInfo The connection information for the current instance.
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return e.prototype.start = function(e, n, r, i) {
        var o = this;
        this.U_(), this.Dl = e;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        var s = new hr, u = !1;
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.Jc((function(e) {
            if (!u) return u = !0, l("FirestoreClient", "Initializing. user=", e.uid), o.Q_(n, r, i, e, s).then(o.q_.resolve, o.q_.reject);
            o.os.Ds((function() {
                return function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return (r = m(e)).os.Fs(), l("RemoteStore", "RemoteStore received new credentials"), 
                                i = Go(r), 
                                // Tear down and re-create our network streams. This will ensure we get a
                                // fresh auth token for the new user and re-fill the write pipeline with
                                // new mutations from the LocalStore (since mutations are per-user).
                                r.Zu.add(3 /* CredentialChange */), [ 4 /*yield*/ , Vo(r) ];

                              case 1:
                                return t.sent(), i && 
                                // Don't set the network status to Unknown if we are offline.
                                r.sh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , r.Yu.t_(n) ];

                              case 2:
                                return t.sent(), r.Zu.delete(3 /* CredentialChange */), [ 4 /*yield*/ , Po(r) ];

                              case 3:
                                // Tear down and re-create our network streams. This will ensure we get a
                                // fresh auth token for the new user and re-fill the write pipeline with
                                // new mutations from the LocalStore (since mutations are per-user).
                                return t.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(o.Dh, e);
            }));
        })), 
        // Block the async queue until initialization is done
        this.os.ds((function() {
            return o.q_.promise;
        })), s.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ e.prototype.enableNetwork = function() {
        var t = this;
        return this.U_(), this.os.enqueue((function() {
            return t.persistence.sc(!0), function(t) {
                var e = m(t);
                return e.Zu.delete(0 /* UserDisabled */), Po(e);
            }(t.Dh);
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    e.prototype.Q_ = function(e, n, r, i, o) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var s, u, a = this;
            return t.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 3, , 4 ]), s = {
                        os: this.os,
                        Dl: this.Dl,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Gl: i,
                        Fh: 100,
                        persistenceSettings: r
                    }, [ 4 /*yield*/ , e.initialize(s) ];

                  case 1:
                    return c.sent(), [ 4 /*yield*/ , n.initialize(e, s) ];

                  case 2:
                    return c.sent(), this.persistence = e.persistence, this.Nh = e.Nh, this.zu = e.zu, 
                    this.Wl = e.Wl, this.Hu = n.Hu, this.Dh = n.Dh, this._i = n._i, this.W_ = n.Ch, 
                    this.W_.qs = ps.bind(null, this._i), this.W_.Ws = vs.bind(null, this._i), 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.nc((function() {
                        return t.__awaiter(a, void 0, void 0, (function() {
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (u = c.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(u), !this.j_(u)) throw u;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), 
                    this.Q_(new eu, new ru, {
                        zl: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    e.prototype.j_ = function(t) {
        return "FirebaseError" === t.name ? t.code === a.FAILED_PRECONDITION || t.code === a.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    e.prototype.U_ = function() {
        if (this.os.Vs) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Disables the network connection. Pending operations will not complete. */ e.prototype.disableNetwork = function() {
        var e = this;
        return this.U_(), this.os.enqueue((function() {
            return e.persistence.sc(!1), function(e) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var n;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return (n = m(e)).Zu.add(0 /* UserDisabled */), [ 4 /*yield*/ , Vo(n) ];

                          case 1:
                            return t.sent(), 
                            // Set the OnlineState to Offline so get()s return from cache, etc.
                            n.sh.set("Offline" /* Offline */), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(e.Dh);
        }));
    }, e.prototype.terminate = function() {
        var e = this;
        this.os.Ss();
        var n = new hr;
        return this.os.ps((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                var e, r;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return t.trys.push([ 0, 4, , 5 ]), 
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        this.Wl && this.Wl.stop(), [ 4 /*yield*/ , Co(this.Dh) ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Nh.Si() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.Si() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.Xc(), n.resolve(), [ 3 /*break*/ , 5 ];

                      case 4:
                        return e = t.sent(), r = Ar(e, "Failed to shutdown persistence"), n.reject(r), [ 3 /*break*/ , 5 ];

                      case 5:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), n.promise;
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    e.prototype.waitForPendingWrites = function() {
        var e = this;
        this.U_();
        var n = new hr;
        return this.os.ds((function() {
            return function(e, n) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var r, i, o, s, u;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            Go((r = m(e)).Dh) || l("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                            t.label = 1;

                          case 1:
                            return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                                var e = m(t);
                                return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                                    return e.vr.Bo(t);
                                }));
                            }(r.zu) ];

                          case 2:
                            return -1 === (i = t.sent()) ? [ 2 /*return*/ , void n.resolve() ] : ((o = r.Uh.get(i) || []).push(n), 
                            r.Uh.set(i, o), [ 3 /*break*/ , 4 ]);

                          case 3:
                            return s = t.sent(), u = Ar(s, "Initialization of waitForPendingWrites() operation failed"), 
                            n.reject(u), [ 3 /*break*/ , 4 ];

                          case 4:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(e._i, n);
        })), n.promise;
    }, e.prototype.listen = function(t, e, n) {
        var r = this;
        this.U_();
        var i = new iu(n), o = new Ur(t, i, e);
        return this.os.ds((function() {
            return xr(r.W_, o);
        })), function() {
            i.n_(), r.os.ds((function() {
                return kr(r.W_, o);
            }));
        };
    }, e.prototype.K_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return t.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.U_(), [ 4 /*yield*/ , this.q_.promise ];

                  case 1:
                    return i.sent(), n = new hr, [ 2 /*return*/ , (this.os.ds((function() {
                        return function(e, n, r) {
                            return t.__awaiter(this, void 0, void 0, (function() {
                                var i, o, s;
                                return t.__generator(this, (function(t) {
                                    switch (t.label) {
                                      case 0:
                                        return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                            var n = m(t);
                                            return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                return n.xc.Dr(t, e);
                                            }));
                                        }(e, n) ];

                                      case 1:
                                        return (i = t.sent()) instanceof Dn ? r.resolve(i) : i instanceof Sn ? r.resolve(null) : r.reject(new c(a.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                        [ 3 /*break*/ , 3 ];

                                      case 2:
                                        return o = t.sent(), s = Ar(o, "Failed to get document '" + n + " from cache"), 
                                        r.reject(s), [ 3 /*break*/ , 3 ];

                                      case 3:
                                        return [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(r.zu, e, n);
                    })), n.promise) ];
                }
            }));
        }));
    }, e.prototype.G_ = function(e, n) {
        return void 0 === n && (n = {}), t.__awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.U_(), [ 4 /*yield*/ , this.q_.promise ];

                  case 1:
                    return t.sent(), r = new hr, [ 2 /*return*/ , (this.os.ds((function() {
                        return function(t, e, n, r, i) {
                            var o = new iu({
                                next: function(o) {
                                    // Remove query first before passing event to user to avoid
                                    // user actions affecting the now stale query.
                                    e.ds((function() {
                                        return kr(t, s);
                                    }));
                                    var u = o.docs.has(n);
                                    !u && o.fromCache ? 
                                    // TODO(dimond): If we're online and the document doesn't
                                    // exist then we resolve with a doc.exists set to false. If
                                    // we're offline however, we reject the Promise in this
                                    // case. Two options: 1) Cache the negative response from
                                    // the server so we can deliver that even when you're
                                    // offline 2) Actually reject the Promise in the online case
                                    // if the document doesn't exist.
                                    i.reject(new c(a.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                                },
                                error: function(t) {
                                    return i.reject(t);
                                }
                            }), s = new Ur(On(n.path), o, {
                                includeMetadataChanges: !0,
                                Js: !0
                            });
                            return xr(t, s);
                        }(i.W_, i.os, e, n, r);
                    })), r.promise) ];
                }
            }));
        }));
    }, e.prototype.z_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return t.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.U_(), [ 4 /*yield*/ , this.q_.promise ];

                  case 1:
                    return i.sent(), n = new hr, [ 2 /*return*/ , (this.os.ds((function() {
                        return function(e, n, r) {
                            return t.__awaiter(this, void 0, void 0, (function() {
                                var i, o, s, u, a, c;
                                return t.__generator(this, (function(t) {
                                    switch (t.label) {
                                      case 0:
                                        return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , wo(e, n, 
                                        /* usePreviousResults= */ !0) ];

                                      case 1:
                                        return i = t.sent(), o = new cs(n, i.kc), s = o.Eh(i.documents), u = o.gr(s, 
                                        /* updateLimboDocuments= */ !1), r.resolve(u.snapshot), [ 3 /*break*/ , 3 ];

                                      case 2:
                                        return a = t.sent(), c = Ar(a, "Failed to execute query '" + n + " against cache"), 
                                        r.reject(c), [ 3 /*break*/ , 3 ];

                                      case 3:
                                        return [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(r.zu, e, n);
                    })), n.promise) ];
                }
            }));
        }));
    }, e.prototype.H_ = function(e, n) {
        return void 0 === n && (n = {}), t.__awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.U_(), [ 4 /*yield*/ , this.q_.promise ];

                  case 1:
                    return t.sent(), r = new hr, [ 2 /*return*/ , (this.os.ds((function() {
                        return function(t, e, n, r, i) {
                            var o = new iu({
                                next: function(n) {
                                    // Remove query first before passing event to user to avoid
                                    // user actions affecting the now stale query.
                                    e.ds((function() {
                                        return kr(t, s);
                                    })), n.fromCache && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                                },
                                error: function(t) {
                                    return i.reject(t);
                                }
                            }), s = new Ur(n, o, {
                                includeMetadataChanges: !0,
                                Js: !0
                            });
                            return xr(t, s);
                        }(i.W_, i.os, e, n, r);
                    })), r.promise) ];
                }
            }));
        }));
    }, e.prototype.write = function(e) {
        var n = this;
        this.U_();
        var r = new hr;
        return this.os.ds((function() {
            return function(e, n, r) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var i, o, s, u;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            i = Fs(e), t.label = 1;

                          case 1:
                            return t.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , 
                            /* Accepts locally generated Mutations and commit them to storage. */
                            function(t, e) {
                                var n, r = m(t), i = ot.now(), o = e.reduce((function(t, e) {
                                    return t.add(e.key);
                                }), Rt());
                                return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                                    return r.xc.$r(t, o).next((function(o) {
                                        n = o;
                                        for (
                                        // For non-idempotent mutations (such as `FieldValue.increment()`),
                                        // we record the base state in a separate patch mutation. This is
                                        // later used to guarantee consistent values and prevents flicker
                                        // even if the backend sends us an update that already includes our
                                        // transform.
                                        var s = [], u = 0, a = e; u < a.length; u++) {
                                            var c = a[u], h = ln(c, n.get(c.key));
                                            null != h && 
                                            // NOTE: The base state should only be applied if there's some
                                            // existing document to override, so use a Precondition of
                                            // exists=true
                                            s.push(new yn(c.key, h, Nn(h.proto.mapValue), un.exists(!0)));
                                        }
                                        return r.vr.$o(t, i, s, e);
                                    }));
                                })).then((function(t) {
                                    var e = t.hr(n);
                                    return {
                                        batchId: t.batchId,
                                        dr: e
                                    };
                                }));
                            }(i.zu, n) ];

                          case 2:
                            return o = t.sent(), i.Nh.Fi(o.batchId), function(t, e, n) {
                                var r = t.qh[t.currentUser.Zs()];
                                r || (r = new bt(H)), r = r.rt(e, n), t.qh[t.currentUser.Zs()] = r;
                            }(i, o.batchId, r), [ 4 /*yield*/ , Ss(i, o.dr) ];

                          case 3:
                            return t.sent(), [ 4 /*yield*/ , Zo(i.Dh) ];

                          case 4:
                            return t.sent(), [ 3 /*break*/ , 6 ];

                          case 5:
                            return s = t.sent(), u = Ar(s, "Failed to persist write"), r.reject(u), [ 3 /*break*/ , 6 ];

                          case 6:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(n._i, e, r);
        })), r.promise;
    }, e.prototype.U = function() {
        return this.Dl.U;
    }, e.prototype.Y_ = function(e) {
        var n = this;
        this.U_();
        var r = new iu(e);
        return this.os.ds((function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return [ 2 /*return*/ , function(t, e) {
                        m(t).Bs.add(e), 
                        // Immediately fire an initial event, indicating all existing listeners
                        // are in-sync.
                        e.next();
                    }(this.W_, r) ];
                }));
            }));
        })), function() {
            r.n_(), n.os.ds((function() {
                return t.__awaiter(n, void 0, void 0, (function() {
                    return t.__generator(this, (function(t) {
                        return [ 2 /*return*/ , function(t, e) {
                            m(t).Bs.delete(e);
                        }(this.W_, r) ];
                    }));
                }));
            }));
        };
    }, Object.defineProperty(e.prototype, "J_", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.os.Vs;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     */
    e.prototype.transaction = function(t) {
        var e = this;
        this.U_();
        var n = new hr;
        return this.os.ds((function() {
            return new Mu(e.os, e.Hu, t, n).run(), Promise.resolve();
        })), n.promise;
    }, e;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function Fu(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var ju = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.U = t, this.timestampsInSnapshots = e, this.X_ = n, this.Z_ = r, this.tf = i;
    }
    return t.prototype.ef = function(t) {
        switch (Zt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return ie(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.nf(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.sf(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.tf(oe(t.bytesValue));

          case 7 /* RefValue */ :
            return this.if(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.rf(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.af(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.cf(t.mapValue);

          default:
            throw y();
        }
    }, t.prototype.cf = function(t) {
        var e = this, n = {};
        return _(t.fields || {}, (function(t, r) {
            n[t] = e.ef(r);
        })), n;
    }, t.prototype.rf = function(t) {
        return new gu(ie(t.latitude), ie(t.longitude));
    }, t.prototype.af = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.ef(t);
        }));
    }, t.prototype.sf = function(t) {
        switch (this.X_) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Ht(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.ef(e);

          case "estimate":
            return this.nf(Yt(t));

          default:
            return null;
        }
    }, t.prototype.nf = function(t) {
        var e = re(t), n = new ot(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.if = function(t) {
        var e = E.P(t);
        g(Ge(e));
        var n = new rt(e.get(1), e.get(3)), r = new A(e.u(5));
        return n.isEqual(this.U) || 
        // TODO(b/64130202): Somehow support foreign references.
        p("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), 
        this.Z_(r);
    }, t;
}(), zu = ri.uo, Bu = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new c(a.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else R("settings", "non-empty string", "host", t.host), this.host = t.host, U("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (j("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        U("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        U("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), U("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? p("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && p("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        U("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ri.lo; else {
            if (t.cacheSizeBytes !== zu && t.cacheSizeBytes < ri.ho) throw new c(a.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ri.ho);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        U("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.experimentalForceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), Gu = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function e(n, r, i, o) {
        var s = this;
        if (void 0 === i && (i = new eu), void 0 === o && (o = new ru), this.uf = i, this.hf = o, 
        this.lf = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this._f = new Nr, this.INTERNAL = {
            delete: function() {
                return t.__awaiter(s, void 0, void 0, (function() {
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.ff(), [ 4 /*yield*/ , this.df.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = n;
            this.lf = u, this.w_ = e.wf(u), this.mf = u.name, this.Tf = new Ao(r);
        } else {
            var h = n;
            if (!h.projectId) throw new c(a.INVALID_ARGUMENT, "Must provide projectId");
            this.w_ = new rt(h.projectId, h.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.mf = "[DEFAULT]", this.Tf = new No;
        }
        this.Ef = new Bu({});
    }
    return Object.defineProperty(e.prototype, "If", {
        get: function() {
            return this.Af || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.Af = new Tu(this.w_, this.Ef.ignoreUndefinedProperties)), this.Af;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.settings = function(t) {
        S("Firestore.settings", arguments, 1), L("Firestore.settings", "object", 1, t), 
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.Ef), t)).merge;
        var e = new Bu(t);
        if (this.df && !this.Ef.isEqual(e)) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.Ef = e, void 0 !== e.credentials && (this.Tf = function(t) {
            if (!t) return new No;
            switch (t.type) {
              case "gapi":
                var e = t.Rf;
                // Make sure this really is a Gapi client.
                                return g(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new So(e, t.iu || "0");

              case "provider":
                return t.Rf;

              default:
                throw new c(a.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, e.prototype.enableNetwork = function() {
        return this.ff(), this.df.enableNetwork();
    }, e.prototype.disableNetwork = function() {
        return this.ff(), this.df.disableNetwork();
    }, e.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.df) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && p("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new c(a.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Pf(this.uf, this.hf, {
            zl: !0,
            cacheSizeBytes: this.Ef.cacheSizeBytes,
            synchronizeTabs: r,
            La: i
        });
    }, e.prototype.clearPersistence = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(r) {
                if (void 0 !== this.df && !this.df.J_) throw new c(a.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                return e = new hr, [ 2 /*return*/ , (this._f.ps((function() {
                    return t.__awaiter(n, void 0, void 0, (function() {
                        var n;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.uf.clearPersistence(this.w_, this.mf) ];

                              case 1:
                                return t.sent(), e.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return n = t.sent(), e.reject(n), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), e.promise) ];
            }));
        }));
    }, e.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(e.prototype, "gf", {
        get: function() {
            return this.ff(), this.df.J_;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.waitForPendingWrites = function() {
        return this.ff(), this.df.waitForPendingWrites();
    }, e.prototype.onSnapshotsInSync = function(t) {
        if (this.ff(), Fu(t)) return this.df.Y_(t);
        L("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.df.Y_(e);
    }, e.prototype.ff = function() {
        return this.df || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Pf(new eu, new ru, {
            zl: !1
        }), this.df;
    }, e.prototype.yf = function() {
        return new nt(this.w_, this.mf, this.Ef.host, this.Ef.ssl, this.Ef.experimentalForceLongPolling);
    }, e.prototype.Pf = function(t, e, n) {
        var r = this.yf();
        return this.df = new qu(this.Tf, this._f), this.df.start(r, t, e, n);
    }, e.wf = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(a.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */        if (!n || "string" != typeof n) throw new c(a.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new rt(n);
    }, Object.defineProperty(e.prototype, "app", {
        get: function() {
            if (!this.lf) throw new c(a.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.lf;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        return S("Firestore.collection", arguments, 1), L("Firestore.collection", "non-empty string", 1, t), 
        this.ff(), new oa(E.P(t), this, 
        /* converter= */ null);
    }, e.prototype.doc = function(t) {
        return S("Firestore.doc", arguments, 1), L("Firestore.doc", "non-empty string", 1, t), 
        this.ff(), Ku.Vf(E.P(t), this, 
        /* converter= */ null);
    }, e.prototype.collectionGroup = function(t) {
        if (S("Firestore.collectionGroup", arguments, 1), L("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.ff(), new ra(
        /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
        function(t) {
            return new kn(E.g(), t);
        }(t), this, 
        /* converter= */ null);
    }, e.prototype.runTransaction = function(t) {
        var e = this;
        return S("Firestore.runTransaction", arguments, 1), L("Firestore.runTransaction", "function", 1, t), 
        this.ff().transaction((function(n) {
            return t(new Wu(e, n));
        }));
    }, e.prototype.batch = function() {
        return this.ff(), new Qu(this);
    }, Object.defineProperty(e, "logLevel", {
        get: function() {
            switch (f()) {
              case n.LogLevel.DEBUG:
                return "debug";

              case n.LogLevel.ERROR:
                return "error";

              case n.LogLevel.SILENT:
                return "silent";

              case n.LogLevel.WARN:
                return "warn";

              case n.LogLevel.INFO:
                return "info";

              case n.LogLevel.VERBOSE:
                return "verbose";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !1,
        configurable: !0
    }), e.setLogLevel = function(t) {
        var e;
        S("Firestore.setLogLevel", arguments, 1), V("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, h.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    e.prototype.pf = function() {
        return this.Ef.timestampsInSnapshots;
    }, 
    // Visible for testing.
    e.prototype.bf = function() {
        return this.Ef;
    }, e;
}(), Wu = /** @class */ function() {
    function t(t, e) {
        this.vf = t, this.Sf = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        S("Transaction.get", arguments, 1);
        var n = ca("Transaction.get", t, this.vf);
        return this.Sf.C_([ n.m_ ]).then((function(t) {
            if (!t || 1 !== t.length) return y();
            var r = t[0];
            if (r instanceof Sn) return new Yu(e.vf, n.m_, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.T_);
            if (r instanceof Dn) return new Yu(e.vf, n.m_, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.T_);
            throw y();
        }));
    }, t.prototype.set = function(t, e, n) {
        k("Transaction.set", arguments, 2, 3);
        var r = ca("Transaction.set", t, this.vf);
        n = sa("Transaction.set", n);
        var i = fa(r.T_, e, n), o = Nu(this.vf.If, "Transaction.set", r.m_, i, null !== r.T_, n);
        return this.Sf.set(r.m_, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof su ? (x("Transaction.update", arguments, 3), 
        r = ca("Transaction.update", t, this.vf), i = Du(this.vf.If, "Transaction.update", r.m_, e, n, o)) : (S("Transaction.update", arguments, 2), 
        r = ca("Transaction.update", t, this.vf), i = Au(this.vf.If, "Transaction.update", r.m_, e)), 
        this.Sf.update(r.m_, i), this;
    }, t.prototype.delete = function(t) {
        S("Transaction.delete", arguments, 1);
        var e = ca("Transaction.delete", t, this.vf);
        return this.Sf.delete(e.m_), this;
    }, t;
}(), Qu = /** @class */ function() {
    function t(t) {
        this.vf = t, this.Df = [], this.Cf = !1;
    }
    return t.prototype.set = function(t, e, n) {
        k("WriteBatch.set", arguments, 2, 3), this.Nf();
        var r = ca("WriteBatch.set", t, this.vf);
        n = sa("WriteBatch.set", n);
        var i = fa(r.T_, e, n), o = Nu(this.vf.If, "WriteBatch.set", r.m_, i, null !== r.T_, n);
        return this.Df = this.Df.concat(o.E_(r.m_, un.Ge())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.Nf(), "string" == typeof e || e instanceof su ? (x("WriteBatch.update", arguments, 3), 
        r = ca("WriteBatch.update", t, this.vf), i = Du(this.vf.If, "WriteBatch.update", r.m_, e, n, o)) : (S("WriteBatch.update", arguments, 2), 
        r = ca("WriteBatch.update", t, this.vf), i = Au(this.vf.If, "WriteBatch.update", r.m_, e)), 
        this.Df = this.Df.concat(i.E_(r.m_, un.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        S("WriteBatch.delete", arguments, 1), this.Nf();
        var e = ca("WriteBatch.delete", t, this.vf);
        return this.Df = this.Df.concat(new bn(e.m_, un.Ge())), this;
    }, t.prototype.commit = function() {
        return this.Nf(), this.Cf = !0, this.Df.length > 0 ? this.vf.ff().write(this.Df) : Promise.resolve();
    }, t.prototype.Nf = function() {
        if (this.Cf) throw new c(a.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Ku = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.w_, t, r) || this).m_ = t, i.firestore = n, i.T_ = r, 
        i.df = i.firestore.ff(), i;
    }
    return t.__extends(n, e), n.Vf = function(t, e, r) {
        if (t.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
        return new n(new A(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.m_.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new oa(this.m_.path.h(), this.firestore, this.T_);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.m_.path.R();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (S("DocumentReference.collection", arguments, 1), L("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new c(a.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = E.P(t);
        return new oa(this.m_.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw z("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.m_.isEqual(t.m_) && this.T_ === t.T_;
    }, n.prototype.set = function(t, e) {
        k("DocumentReference.set", arguments, 1, 2), e = sa("DocumentReference.set", e);
        var n = fa(this.T_, t, e), r = Nu(this.firestore.If, "DocumentReference.set", this.m_, n, null !== this.T_, e);
        return this.df.write(r.E_(this.m_, un.Ge()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof su ? (x("DocumentReference.update", arguments, 2), 
        n = Du(this.firestore.If, "DocumentReference.update", this.m_, t, e, r)) : (S("DocumentReference.update", arguments, 1), 
        n = Au(this.firestore.If, "DocumentReference.update", this.m_, t)), this.df.write(n.E_(this.m_, un.exists(!0)));
    }, n.prototype.delete = function() {
        return S("DocumentReference.delete", arguments, 0), this.df.write([ new bn(this.m_, un.Ge()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        k("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
            includeMetadataChanges: !1
        }, u = 0;
        "object" != typeof i[u] || Fu(i[u]) || (j("DocumentReference.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        U("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++);
        var a = {
            includeMetadataChanges: s.includeMetadataChanges
        };
        if (Fu(i[u])) {
            var c = i[u];
            i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), 
            i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else L("DocumentReference.onSnapshot", "function", u, i[u]), O("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), 
        O("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
        var h = {
            next: function(t) {
                i[u] && i[u](r.Ff(t));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return this.df.listen(On(this.m_.path), a, h);
    }, n.prototype.get = function(t) {
        var e = this;
        k("DocumentReference.get", arguments, 0, 1), aa("DocumentReference.get", t);
        var n = this.firestore.ff();
        return t && "cache" === t.source ? n.K_(this.m_).then((function(t) {
            return new Yu(e.firestore, e.m_, t, 
            /*fromCache=*/ !0, t instanceof Dn && t.Ye, e.T_);
        })) : n.G_(this.m_, t).then((function(t) {
            return e.Ff(t);
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.m_, this.firestore, t);
    }, 
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n.prototype.Ff = function(t) {
        var e = t.docs.get(this.m_);
        return new Yu(this.firestore, this.m_, e, t.fromCache, t.hasPendingWrites, this.T_);
    }, n;
}(wu), Hu = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Yu = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.vf = t, this.m_ = e, this.xf = n, this.$f = r, this.kf = i, this.T_ = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (k("DocumentSnapshot.data", arguments, 0, 1), t = ua("DocumentSnapshot.data", t), 
        this.xf) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.T_) {
                var n = new Xu(this.vf, this.m_, this.xf, this.$f, this.kf, 
                /* converter= */ null);
                return this.T_.fromFirestore(n, t);
            }
            return new ju(this.vf.w_, this.vf.pf(), t.serverTimestamps || "none", (function(t) {
                return new Ku(t, e.vf, /* converter= */ null);
            }), (function(t) {
                return new et(t);
            })).ef(this.xf.sn());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (k("DocumentSnapshot.get", arguments, 1, 2), e = ua("DocumentSnapshot.get", e), 
        this.xf) {
            var r = this.xf.data().field(Ru("DocumentSnapshot.get", t, this.m_));
            if (null !== r) return new ju(this.vf.w_, this.vf.pf(), e.serverTimestamps || "none", (function(t) {
                return new Ku(t, n.vf, n.T_);
            }), (function(t) {
                return new et(t);
            })).ef(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.m_.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Ku(this.m_, this.vf, this.T_);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.xf;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Hu(this.kf, this.$f);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw z("isEqual", "DocumentSnapshot", 1, e);
        return this.vf === e.vf && this.$f === e.$f && this.m_.isEqual(e.m_) && (null === this.xf ? null === e.xf : this.xf.isEqual(e.xf)) && this.T_ === e.T_;
    }, t;
}(), Xu = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Yu);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Zu(t, e, n, r, i, o, s) {
    var u;
    if (i.p()) {
        if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new c(a.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
        if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
            ta(s, o);
            for (var h = [], f = 0, l = s; f < l.length; f++) {
                var p = l[f];
                h.push($u(r, t, p));
            }
            u = {
                arrayValue: {
                    values: h
                }
            };
        } else u = $u(r, t, s);
    } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || ta(s, o), 
    u = Su(n, e, s, 
    /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
    var d = Hn.create(i, o, u);
    return function(t, e) {
        if (e.un()) {
            var n = Vn(t);
            if (null !== n && !n.isEqual(e.field)) throw new c(a.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
            var r = Pn(t);
            null !== r && ea(t, e.field, r);
        }
        var i = function(t, e) {
            for (var n = 0, r = t.filters; n < r.length; n++) {
                var i = r[n];
                if (e.indexOf(i.op) >= 0) return i.op;
            }
            return null;
        }(t, 
        /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
        function(t) {
            switch (t) {
              case "!=" /* NOT_EQUAL */ :
                return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

              case "array-contains" /* ARRAY_CONTAINS */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

              case "in" /* IN */ :
                return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "not-in" /* NOT_IN */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

              default:
                return [];
            }
        }(e.op));
        if (null !== i) 
        // Special case when it's a duplicate op to give a slightly clearer error message.
        throw i === e.op ? new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
    }(t, d), d;
}

function Ju(t, e, n) {
    if (null !== t.startAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
    if (null !== t.endAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
    var r = new ur(e, n);
    return function(t, e) {
        if (null === Pn(t)) {
            // This is the first order by. It must match any inequality.
            var n = Vn(t);
            null !== n && ea(t, n, e.field);
        }
    }(t, r), r
    /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */
    /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */;
}

function $u(t, e, n) {
    if ("string" == typeof n) {
        if ("" === n) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Cn(e) && -1 !== n.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(E.P(n));
        if (!A.F(r)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return se(t, new A(r));
    }
    if (n instanceof wu) return se(t, n.m_);
    throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + q(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function ta(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new c(a.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
    if ("in" /* IN */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) {
        if (t.indexOf(null) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }
}

function ea(t, e, n) {
    if (!n.isEqual(e)) throw new c(a.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

function na(t) {
    if (Un(t) && 0 === t.rn.length) throw new c(a.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var ra = /** @class */ function() {
    function e(t, e, n) {
        this.Mf = t, this.firestore = e, this.T_ = n;
    }
    return e.prototype.where = function(t, n, r) {
        S("Query.where", arguments, 3), F("Query.where", 3, r);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var i = V("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , "!=" /* NOT_EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ], 2, n), o = Ru("Query.where", t), s = Zu(this.Mf, "Query.where", this.firestore.If, this.firestore.w_, o, i, r);
        return new e(function(t, e) {
            var n = t.filters.concat([ e ]);
            return new kn(t.path, t.collectionGroup, t.rn.slice(), n, t.limit, t.on, t.startAt, t.endAt);
        }(this.Mf, s), this.firestore, this.T_);
    }, e.prototype.orderBy = function(t, n) {
        var r;
        if (k("Query.orderBy", arguments, 1, 2), O("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = "asc" /* ASCENDING */; else {
            if ("desc" !== n) throw new c(a.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        var i = Ru("Query.orderBy", t), o = Ju(this.Mf, i, r);
        return new e(function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.rn.concat([ e ]);
            return new kn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.on, t.startAt, t.endAt);
        }(this.Mf, o), this.firestore, this.T_);
    }, e.prototype.limit = function(t) {
        return S("Query.limit", arguments, 1), L("Query.limit", "number", 1, t), B("Query.limit", 1, t), 
        new e(Fn(this.Mf, t, "F" /* First */), this.firestore, this.T_);
    }, e.prototype.limitToLast = function(t) {
        return S("Query.limitToLast", arguments, 1), L("Query.limitToLast", "number", 1, t), 
        B("Query.limitToLast", 1, t), new e(Fn(this.Mf, t, "L" /* Last */), this.firestore, this.T_);
    }, e.prototype.startAt = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.startAt", arguments, 1);
        var i = this.Of("Query.startAt", t, n, 
        /*before=*/ !0);
        return new e(jn(this.Mf, i), this.firestore, this.T_);
    }, e.prototype.startAfter = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.startAfter", arguments, 1);
        var i = this.Of("Query.startAfter", t, n, 
        /*before=*/ !1);
        return new e(jn(this.Mf, i), this.firestore, this.T_);
    }, e.prototype.endBefore = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.endBefore", arguments, 1);
        var i = this.Of("Query.endBefore", t, n, 
        /*before=*/ !0);
        return new e(zn(this.Mf, i), this.firestore, this.T_);
    }, e.prototype.endAt = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.endAt", arguments, 1);
        var i = this.Of("Query.endAt", t, n, 
        /*before=*/ !1);
        return new e(zn(this.Mf, i), this.firestore, this.T_);
    }, e.prototype.isEqual = function(t) {
        if (!(t instanceof e)) throw z("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && Bn(this.Mf, t.Mf) && this.T_ === t.T_;
    }, e.prototype.withConverter = function(t) {
        return new e(this.Mf, this.firestore, t);
    }, 
    /** Helper function to create a bound from a document or fields */ e.prototype.Of = function(e, n, r, i) {
        if (F(e, 1, n), n instanceof Yu) return S(e, t.__spreadArrays([ n ], r), 1), function(t, e, n, r, i) {
            if (!r) throw new c(a.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
            // Because people expect to continue/end a query at the exact document
            // provided, we need to use the implicit sort order rather than the explicit
            // sort order, because it's guaranteed to contain the document key. That way
            // the position becomes unambiguous and the query continues/ends exactly at
            // the provided document. Without the key (by using the explicit sort
            // orders), multiple documents could match the position, yielding duplicate
            // results.
            for (var o = [], s = 0, u = Mn(t); s < u.length; s++) {
                var h = u[s];
                if (h.field.p()) o.push(se(e, r.key)); else {
                    var f = r.field(h.field);
                    if (Ht(f)) throw new c(a.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + h.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                    if (null === f) {
                        var l = h.field.R();
                        throw new c(a.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + l + "' (used as the orderBy) does not exist.");
                    }
                    o.push(f);
                }
            }
            return new rr(o, i);
        }(this.Mf, this.firestore.w_, e, n.xf, i);
        var o = [ n ].concat(r);
        return function(t, e, n, r, i, o) {
            // Use explicit order by's because it has to match the query the user made
            var s = t.rn;
            if (i.length > s.length) throw new c(a.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
            for (var u = [], h = 0; h < i.length; h++) {
                var f = i[h];
                if (s[h].field.p()) {
                    if ("string" != typeof f) throw new c(a.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof f);
                    if (!Cn(t) && -1 !== f.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + f + "' contains a slash.");
                    var l = t.path.child(E.P(f));
                    if (!A.F(l)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + l + "' is not because it contains an odd number of segments.");
                    var p = new A(l);
                    u.push(se(e, p));
                } else {
                    var d = Su(n, r, f);
                    u.push(d);
                }
            }
            return new rr(u, o);
        }(this.Mf, this.firestore.w_, this.firestore.If, e, o, i);
    }, e.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        k("Query.onSnapshot", arguments, 1, 4);
        var s = {}, u = 0;
        if ("object" != typeof i[u] || Fu(i[u]) || (j("Query.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        U("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++), Fu(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), 
            i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else L("Query.onSnapshot", "function", u, i[u]), O("Query.onSnapshot", "function", u + 1, i[u + 1]), 
        O("Query.onSnapshot", "function", u + 2, i[u + 2]);
        var c = {
            next: function(t) {
                i[u] && i[u](new ia(r.firestore, r.Mf, t, r.T_));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return na(this.Mf), this.firestore.ff().listen(this.Mf, s, c);
    }, e.prototype.get = function(t) {
        var e = this;
        k("Query.get", arguments, 0, 1), aa("Query.get", t), na(this.Mf);
        var n = this.firestore.ff();
        return (t && "cache" === t.source ? n.z_(this.Mf) : n.H_(this.Mf, t)).then((function(t) {
            return new ia(e.firestore, e.Mf, t, e.T_);
        }));
    }, e;
}(), ia = /** @class */ function() {
    function t(t, e, n, r) {
        this.vf = t, this.Lf = e, this.Bf = n, this.T_ = r, this.qf = null, this.Uf = null, 
        this.metadata = new Hu(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Bf.docs.m();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Bf.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        k("QuerySnapshot.forEach", arguments, 1, 2), L("QuerySnapshot.forEach", "function", 1, t), 
        this.Bf.docs.forEach((function(r) {
            t.call(e, n.Qf(r, n.metadata.fromCache, n.Bf.Qt.has(r.key)));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new ra(this.Lf, this.vf, this.T_);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (j("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), U("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Bf.jt) throw new c(a.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.qf && this.Uf === e || (this.qf = 
        /**
     * Calculates the array of DocumentChanges for a given ViewSnapshot.
     *
     * Exported for testing.
     *
     * @param snapshot The ViewSnapshot that represents the expected state.
     * @param includeMetadataChanges Whether to include metadata changes.
     * @param converter A factory function that returns a QueryDocumentSnapshot.
     * @return An object that matches the DocumentChange API.
     */
        function(t, e, n) {
            if (t.Ut.m()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r = 0;
                return t.docChanges.map((function(e) {
                    var i = n(e.doc, t.fromCache, t.Qt.has(e.doc.key));
                    return e.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: r++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var i = t.Ut;
            return t.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var r = n(e.doc, t.fromCache, t.Qt.has(e.doc.key)), o = -1, s = -1;
                return 0 /* Added */ !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                    type: ha(e.type),
                    doc: r,
                    oldIndex: o,
                    newIndex: s
                };
            }));
        }(this.Bf, e, this.Qf.bind(this)), this.Uf = e), this.qf;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw z("isEqual", "QuerySnapshot", 1, e);
        return this.vf === e.vf && Bn(this.Lf, e.Lf) && this.Bf.isEqual(e.Bf) && this.T_ === e.T_;
    }, t.prototype.Qf = function(t, e, n) {
        return new Xu(this.vf, t.key, t, e, n, this.T_);
    }, t;
}(), oa = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, On(t), n, r) || this).Wf = t, t.length % 2 != 1) throw new c(a.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
        return i;
    }
    return t.__extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Mf.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Mf.path.h();
            return t.m() ? null : new Ku(new A(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Mf.path.R();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        k("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = K.k()), L("CollectionReference.doc", "non-empty string", 1, t);
        var e = E.P(t);
        return Ku.Vf(this.Mf.path.child(e), this.firestore, this.T_);
    }, n.prototype.add = function(t) {
        S("CollectionReference.add", arguments, 1);
        var e = this.T_ ? this.T_.toFirestore(t) : t;
        L("CollectionReference.add", "object", 1, e);
        var n = this.doc();
        // Call set() with the converted value directly to avoid calling toFirestore() a second time.
                return new Ku(n.m_, this.firestore, null).set(e).then((function() {
            return n;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Wf, this.firestore, t);
    }, n;
}(ra);

function sa(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (j(t, e, [ "merge", "mergeFields" ]), U(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + q(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + q(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof su;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(a.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function ua(t, e) {
    return void 0 === e ? {} : (j(t, e, [ "serverTimestamps" ]), P(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function aa(t, e) {
    O(t, "object", 1, e), e && (j(t, e, [ "source" ]), P(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function ca(t, e, n) {
    if (e instanceof wu) {
        if (e.firestore !== n) throw new c(a.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw z(t, "DocumentReference", 1, e);
}

function ha(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return y();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function fa(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var la = {
    Firestore: Gu,
    GeoPoint: gu,
    Timestamp: ot,
    Blob: et,
    Transaction: Wu,
    WriteBatch: Qu,
    DocumentReference: Ku,
    DocumentSnapshot: Yu,
    Query: ra,
    QueryDocumentSnapshot: Xu,
    QuerySnapshot: ia,
    CollectionReference: oa,
    FieldPath: su,
    FieldValue: vu,
    setLogLevel: Gu.setLogLevel,
    CACHE_SIZE_UNLIMITED: zu
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */ function pa(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", (function(t) {
            return function(t, e) {
                var n = new ru, r = new nu(n);
                return new Gu(t, e, r, n);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, la)));
    }(t), t.registerVersion("@firebase/firestore", "1.17.0");
}

pa(u.default), exports.__PRIVATE_registerFirestore = pa;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            if (this.serverResponse_) {
                return this.message_ + '\n' + this.serverResponse_;
            }
            else {
                return this.message_;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: false,
        configurable: true
    });
    return FirebaseStorageError;
}());
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw ('Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].');
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData;
}());
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isInteger(p) {
    return isNumber(p) && Number.isInteger(p);
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (isDef(headers)) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (isDef(body)) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "isRoot", {
        get: function () {
            return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = { bucket: 1, path: 3 };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = { bucket: 1, path: 2 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) { return component.length > 0; })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (isDef(size)) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return service.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            var val = p[key];
            if (key === 'customMetadata') {
                if (!isObject(val)) {
                    throw 'Expected object for \'customMetadata\' mapping.';
                }
            }
            else {
                if (isNonNullObject(val)) {
                    throw "Mapping for '" + key + "' cannot be an object.";
                }
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_RESULTS_KEY = 'maxResults';
var MAX_MAX_RESULTS = 1000;
var PAGE_TOKEN_KEY = 'pageToken';
var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
function listOptionsValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
    }
    for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) ||
                p[MAX_RESULTS_KEY] <= 0) {
                throw 'Expected maxResults to be a positive number.';
            }
            if (p[MAX_RESULTS_KEY] > 1000) {
                throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
        }
        else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
                throw 'Expected pageToken to be string.';
            }
        }
        else {
            throw 'Unknown option: ' + key;
        }
    }
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
    var urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(service, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata_['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = { name: metadataForUpload['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) ||
            isDef(error) ||
            isDef(complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());

var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw invalidArgument(i, name, e.message);
            }
            else {
                throw invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!optional;
    }
    return ArgSpec;
}());
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(validator, optional) {
    function stringValidator(p) {
        if (!isString(p)) {
            throw 'Expected string.';
        }
    }
    var chainedValidator;
    if (validator) {
        chainedValidator = and_(stringValidator, validator);
    }
    else {
        chainedValidator = stringValidator;
    }
    return new ArgSpec(chainedValidator, optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (isNativeBlobDefined() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(optional) {
    return new ArgSpec(metadataValidator, optional);
}
function listOptionSpec(optional) {
    return new ArgSpec(listOptionsValidator, optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(validator, optional) {
    function isLooseObjectValidator(p) {
        var isLooseObject = p === null || (isDef(p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (validator !== undefined && validator !== null) {
            validator(p);
        }
    }
    return new ArgSpec(isLooseObjectValidator, optional);
}
function nullFunctionSpec(optional) {
    function validator(p) {
        var valid = p === null || isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, optional);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, service, location, mappings, blob, metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = null; }
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.service_ = service;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(Code.CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded) { return _this.updateProgress_(sizeBefore + loaded); };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.service_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this.transition_(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this.transition_(InternalTaskState.PAUSED);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);
            var statusRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(InternalTaskState.SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);
            var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case InternalTaskState.PAUSING:
                this.transition_(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this.transition_(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this.start_();
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = isJustDef(p['next']) ||
                    isJustDef(p['error']) ||
                    isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            stringSpec(typeValidator),
            looseObjectSpec(nextOrObserverValidator, true),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
                if (specs !== null) {
                    validate('on', specs, arguments);
                }
                var observer = new Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            looseObjectSpec(binderNextOrObserverValidator),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        var typeOnly = !(isJustDef(nextOrObserver) ||
            isJustDef(error) ||
            isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);
        if (i !== -1) {
            this.observers_.splice(i, 1);
        }
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this.state_)) {
                case TaskState.SUCCESS:
                    async(this.resolve_.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this.reject_;
                    async(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(service, location) {
        this.service = service;
        if (location instanceof Location) {
            this.location = location;
        }
        else {
            this.location = Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (service, location) {
        return new Reference(service, location);
    };
    Reference.prototype.mappings = function () {
        return getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.service, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return lastComponent(this.location.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.service;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param value The string to upload.
     * @param format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);
        if (!isDef(metadataClone['contentType']) &&
            isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        var _this = this;
        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.service, _this.location);
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @return A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
            prefixes: [],
            items: []
        };
        return this.listAllHelper(accumulator).then(function () { return accumulator; });
    };
    Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = {
                            // maxResults is 1000 by default.
                            pageToken: pageToken
                        };
                        return [4 /*yield*/, this.list(opt)];
                    case 1:
                        nextPage = _c.sent();
                        (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                        (_b = accumulator.items).push.apply(_b, nextPage.items);
                        if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.listAllHelper(accumulator, nextPage.nextPageToken)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options See ListOptions for details.
     * @return A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.service.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.service, self.location, 
            /*delimiter= */ '/', op.pageToken, op.maxResults);
            return self.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        var _this = this;
        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;
        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        var _this = this;
        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
            return _this.service
                .makeRequest(requestInfo, authToken)
                .getPromise()
                .then(function (url) {
                if (url === null) {
                    throw noDownloadURL();
                }
                return url;
            });
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (_appDelete) {
    };
    return FailRequest;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function triggerCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handler(success) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
/**
 * @template T
 */
function makeRequest(requestInfo, appId, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var StorageService = /** @class */ (function () {
    function StorageService(app, authProvider, pool, url) {
        var _a;
        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;
        this.authProvider_ = authProvider;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requests_ = new Set();
        this.pool_ = pool;
        if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
        }
        else {
            this.bucket_ = StorageService.extractBucket_((_a = this.app_) === null || _a === void 0 ? void 0 : _a.options);
        }
        this.internals_ = new ServiceInternals(this);
    }
    StorageService.extractBucket_ = function (config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
        if (bucketString == null) {
            return null;
        }
        return Location.makeFromBucketSpec(bucketString);
    };
    StorageService.prototype.getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = this.authProvider_.getImmediate({ optional: true });
                        if (!auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth.getToken()];
                    case 1:
                        tokenData = _a.sent();
                        if (tokenData !== null) {
                            return [2 /*return*/, tokenData.accessToken];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    StorageService.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requests_.forEach(function (request) { return request.cancel(); });
        this.requests_.clear();
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     * @param loc The Location.
     * @return A firebaseStorage.Reference.
     */
    StorageService.prototype.makeStorageReference = function (loc) {
        return new Reference(this, loc);
    };
    StorageService.prototype.makeRequest = function (requestInfo, authToken) {
        var _this = this;
        if (!this.deleted_) {
            var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
            this.requests_.add(request_1);
            // Request removes itself from set when complete.
            request_1.getPromise().then(function () { return _this.requests_.delete(request_1); }, function () { return _this.requests_.delete(request_1); });
            return request_1;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    StorageService.prototype.ref = function (path) {
        function validator(path) {
            if (typeof path !== 'string') {
                throw 'Path is not a string.';
            }
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        validate('ref', [stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new Reference(this, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    StorageService.prototype.refFromURL = function (url) {
        function validator(p) {
            if (typeof p !== 'string') {
                throw 'Path is not a string.';
            }
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                Location.makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this, url);
    };
    Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.maxUploadRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxUploadRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.maxOperationRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxOperationRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: false,
        configurable: true
    });
    return StorageService;
}());
/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.deleteApp();
        return Promise.resolve();
    };
    return ServiceInternals;
}());

var name = "@firebase/storage";
var version = "0.3.43";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    return new StorageService(app, authProvider, new XhrIoPool(), url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: Reference
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return esm_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return esm_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return esm_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return esm_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return esm_1; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; }
function ca(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function da(a) { return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa); }
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja; return p.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now;
function r(a, b) { function c() { } c.prototype = b.prototype; a.S = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function u() { this.j = this.j; this.i = this.i; }
var la = 0;
u.prototype.j = !1;
u.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != la)) {
    var a = da(this);
} };
u.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function ta(a) { return /^[\s\xa0]*$/.test(a); }
var ua = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function xa(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var ya = k.navigator;
    if (ya) {
        var za = ya.userAgent;
        if (za) {
            w = za;
            break a;
        }
    }
    w = "";
}
function Aa(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ba(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
        c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Ea(a) { Ea[" "](a); return a; }
Ea[" "] = aa;
function Fa(a, b) { var c = Ga; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ha = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ia = v(w, "Edge"), Ja = Ia || x, Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() { var a = k.document; return a ? a.documentMode : void 0; }
var Na;
a: {
    var Oa = "", Pa = function () { var a = w; if (Ka)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ia)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (La)
        return /WebKit\/(\S+)/.exec(a); if (Ha)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Pa && (Oa = Pa ? Pa[1] : "");
    if (x) {
        var Qa = Ma();
        if (null != Qa && Qa > parseFloat(Oa)) {
            Na = String(Qa);
            break a;
        }
    }
    Na = Oa;
}
var Ga = {};
function Ra(a) { return Fa(a, function () { {
    var b = 0;
    var e = ua(String(Na)).split("."), f = ua(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Sa;
if (k.document && x) {
    var Ta = Ma();
    Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
}
else
    Sa = void 0;
var Ua = Sa;
var Va = !x || 9 <= Number(Ua), Wa = x && !Ra("9"), Xa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function A(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ka) {
                a: {
                    try {
                        Ea(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(A, y);
var Ya = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.b = function () { A.S.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Wa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var C = "closure_listenable_" + (1E6 * Math.random() | 0), Za = 0;
function $a(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Za; this.Y = this.Z = !1; }
function ab(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function bb(a) { this.src = a; this.a = {}; this.b = 0; }
bb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = cb(a, b, d, e); -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function db(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function cb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var eb = "closure_lm_" + (1E6 * Math.random() | 0), fb = {};
function hb(a, b, c, d, e) { if (d && d.once)
    return ib(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e); }
function kb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = n(e) ? !!e.capture : !!e;
    if (h && !Va)
        return null;
    var m = lb(a);
    m || (a[eb] = m = new bb(a));
    c = m.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = mb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(nb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function mb() { var a = ob, b = Va ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function ib(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e); }
function pb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        pb(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[C])
        db(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
    }
} }
function nb(a) { return a in fb ? fb[a] : fb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && rb(a); return c.call(d, b); }
function ob(a, b) { if (a.Y)
    return !0; if (!Va) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new A(b, this);
    return sb(a, b);
} return sb(a, new A(b, this)); }
function lb(a) { a = a[eb]; return a instanceof bb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function jb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function D() { u.call(this); this.c = new bb(this); this.J = this; this.C = null; }
r(D, u);
D.prototype[C] = !0;
g = D.prototype;
g.addEventListener = function (a, b, c, d) { hb(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { pb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.C; if (c)
    for (b = []; c; c = c.C)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new y(a, c);
else if (a instanceof y)
    a.target = a.target || c;
else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.G = function () { D.S.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            ab(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
g.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Y && h.capture == c) {
        var m = h.listener, l = h.ca || h.src;
        h.Z && db(a.c, h);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Ya, this); this.g = q(); }
r(Hb, D);
g = Hb.prototype;
g.aa = !1;
g.M = null;
g.Ya = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
} };
g.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
g.G = function () { Hb.S.G.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a) { a.a = Jb(function () { a.a = null; a.c && (a.c = !1, Kb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Lb = /** @class */ (function (_super) {
    __extends(Lb, _super);
    function Lb(a, b, c) {
        var _this = _super.call(this) || this;
        _this.g = null != c ? a.bind(c) : a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Lb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Kb(this); };
    Lb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Lb;
}(u));
function E(a) { u.call(this); this.b = a; this.a = {}; }
r(E, u);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Aa(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
E.prototype.G = function () { E.S.G.call(this); Ob(this); };
E.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { this.a = !0; }
function Qb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var t = m[l].split("=");
            if (1 < t.length) {
                var B = t[0];
                t = t[1];
                var z = B.split("_");
                h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
            }
        }
    }
    else
        h = null;
else
    h = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h; }); }
function Rb(a, b, c, d, e, f, h) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h; }); }
function F(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : ""); }); }
function Tb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Pb.prototype.info = function () { };
function Sb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var h = 1; h < e.length; h++)
                                e[h] = "";
                    }
                }
            }
    return vb(c);
}
catch (m) {
    return b;
} }
var Ub = null;
function Vb() { return Ub = Ub || new D; }
function Wb(a) { y.call(this, "serverreachability", a); }
r(Wb, y);
function G(a) { var b = Vb(); b.dispatchEvent(new Wb(b, a)); }
function Xb(a) { y.call(this, "statevent", a); }
r(Xb, y);
function H(a) { var b = Vb(); b.dispatchEvent(new Xb(b, a)); }
function Yb(a) { y.call(this, "timingevent", a); }
r(Yb, y);
function I(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Zb = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 };
var $b = { ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress" };
function ac() { }
ac.prototype.a = null;
function bc(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function cc() { }
var J = { OPEN: "a", $a: "b", Ea: "c", jb: "d" };
function dc() { y.call(this, "d"); }
r(dc, y);
function ec() { y.call(this, "c"); }
r(ec, y);
var fc;
function gc() { }
r(gc, ac);
fc = new gc;
function K(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.T = d || 1; this.J = new E(this); this.P = hc; a = Ja ? 125 : void 0; this.R = new Hb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.U = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.W = this.C = this.V = this.I = !1; }
var hc = 45E3, ic = {}, jc = {};
g = K.prototype;
g.setTimeout = function (a) { this.P = a; };
function kc(a, b, c) { a.H = 1; a.i = lc(L(b)); a.j = c; a.I = !0; mc(a, null); }
function mc(a, b) { a.u = q(); M(a); a.l = L(a.i); var c = a.l, d = a.T; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O)); Nb(a.J, a.a, "readystatechange", a.Wa); b = a.B ? Ba(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); G(1); Qb(a.c, a.m, a.l, a.f, a.T, a.j); }
g.Wa = function (a) { a = a.target; var b = this.F; b && 3 == N(a) ? b.f() : this.Ca(a); };
g.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = N(this.a), c = this.a.ua(), d = this.a.X();
                if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
                    pc(this);
                    var e = this.a.X();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Rb(this.c, this.m, this.l, this.f, this.T, b, e);
                    if (this.b) {
                        if (this.V && !this.C) {
                            b: {
                                if (this.a) {
                                    var h, m = this.a;
                                    if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                                        var l = h;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                H(12);
                                O(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
                        4 == b && O(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
                }
            }
    }
    catch (t) { }
    finally { }
};
function tc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == jc) {
        4 == b && (a.h = 4, H(14), d = !1);
        F(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == ic) {
        a.h = 4;
        H(15);
        F(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        F(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, H(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a)); }
g.Va = function () { if (this.a) {
    var a = N(this.a), b = this.a.$();
    this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return jc; c = Number(b.substring(c, d)); if (isNaN(c))
    return ic; d += 1; if (d + c > b.length)
    return jc; b = b.substr(d, c); a.D = d + c; return b; }
g.cancel = function () { this.A = !0; O(this); };
function M(a) { a.U = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = I(p(a.Ua, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
g.Ua = function () { this.o = null; var a = q(); 0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function O(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Ib(a.R); Ob(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (sc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                H(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (sc) { }
                        c.ea = void 0;
                    }
                }
                else
                    P(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !ta(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var h = e[4];
                            null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var t = a.a;
                            if (t) {
                                var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (B) {
                                    var z = l.b;
                                    !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set, z.b && (Ec(z, z.b), z.b = null));
                                }
                                if (l.A) {
                                    var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    qb && (l.na = qb, Q(l.B, l.A, qb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var va = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (va.C) {
                                Gc(l.b, va);
                                var wa = va, wc = l.D;
                                wc && wa.setTimeout(wc);
                                wa.o && (pc(wa), M(wa));
                                l.a = va;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || P(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        G(4);
    }
    catch (sc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ca(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ca(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function R(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof R)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = R.prototype;
g.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        S(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return S(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { S(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function S(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function T(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof T) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new U;
    c.c = b.c;
    b.a && (c.a = new R(b.a), c.b = b.b);
    Sc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a)); }
T.prototype.toString = function () { var a = [], b = this.f; b && a.push(Uc(b, Vc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Uc(c, Yc)); return a.join(""); };
function L(a) { return new T(a); }
function Pc(a, b, c) { a.f = c ? Tc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Tc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Sc(a, b, c) { b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a)); }
function Q(a, b, c) { a.b.set(b, c); }
function lc(a) { Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function ad(a) { return a instanceof T ? L(a) : new T(a, void 0); }
function bd(a, b, c, d) { var e = new T(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Tc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Uc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function cd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function U(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new R, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = U.prototype;
g.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function dd(a, b) { V(a); b = W(a, b); S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function ed(a, b) { V(a); b = W(a, b); return S(a.a.b, b); }
g.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    ed(this, a) && (b = ra(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { V(this); this.c = null; a = W(this, a); ed(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { dd(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Zc(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (dd(this, d), nc(this, e, c)); }, a)); a.f = b; }
function fd(a, b) { this.b = a; this.a = b; }
function gd(a) { this.g = a || hd; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var hd = 10;
function id(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
gd.prototype.cancel = function () {
    var e_1, _a;
    this.c = jd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function jd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function kd() { }
kd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
kd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ld() { this.a = new kd; }
function md(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var h = e; n(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function nd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function od(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var pd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new R; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = qd; this.D = this.F = !1; }
r(X, D);
var qd = "", rd = /^https?$/i, sd = ["POST", "PUT"];
g = X.prototype;
g.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? bc(this.H) : bc(fc);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        td(this, f);
        return;
    }
    a = c || "";
    var e = new R(this.headers);
    d && Lc(d, function (f, h) { e.set(h, f); });
    d = pa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        td(this, f);
    }
};
function vd(a) { return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function td(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; wd(a); xd(a); }
function wd(a) { a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this)); };
g.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0)); X.S.G.call(this); };
g.za = function () { this.j || (this.A || this.l || this.g ? yd(this) : this.Ta()); };
g.Ta = function () { yd(this); };
function yd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X()))
        if (a.l && 4 == N(a))
            Jb(a.za, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
            a.b = !1;
            try {
                var b = a.X();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.B).match(Nc)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !rd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < N(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.X() + "]";
                    wd(a);
                }
            }
            finally {
                xd(a);
            }
        }
}
function xd(a, b) { if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function ud(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function N(a) { return a.a ? a.a.readyState : 0; }
g.X = function () { try {
    return 2 < N(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Na = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return pd(b);
} };
g.ua = function () { return this.h; };
g.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function zd(a) { var b = ""; Aa(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Ad(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = zd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : Q(a, b, c)); }
function Bd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Cd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Pb;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
    this.La = this.R = 0;
    this.Ia = Bd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.T = !0;
    this.I = this.oa = this.P = -1;
    this.U = this.o = this.u = 0;
    this.Fa = Bd("baseRetryDelayMs", 5E3, a);
    this.Ma = Bd("retryDelaySeedMs", 1E4, a);
    this.Ja = Bd("forwardChannelMaxRetries", 2, a);
    this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ka = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new gd(a && a.concurrentRequestLimit);
    this.ka = new ld;
    this.da = a && a.fastHandshake || !1;
    this.Ga = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.T = !1);
    this.V = !this.da && this.T && a && a.c || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) { Dd(a); if (3 == a.v) {
    var b = a.R++, c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b = new K(a, a.c, b, void 0);
    b.H = 2;
    b.i = lc(L(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    M(b);
} Fd(a); }
function Bc(a) { a.a && (xc(a), a.a.cancel(), a.a = null); }
function Dd(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Gd(a, b) { a.g.push(new fd(a.La++, b)); 3 == a.v && Ic(a); }
function Ic(a) { id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0); }
function Hd(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja))
    return !1; a.h = I(p(a.Ba, a, b), Id(a, a.u)); a.u++; return !0; }
g.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new K(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Jd(this, b, d);
                e = L(this.B);
                Q(e, "RID", a);
                Q(e, "CVER", 22);
                this.A && Q(e, "X-HTTP-Session-Id", this.A);
                Ed(this, e);
                this.i && c && Ad(e, this.i, c);
                Ec(this.b, b);
                this.Ga && Q(e, "TYPE", "init");
                this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};
function Kd(a, b) { var c; b ? c = b.f : c = a.R++; var d = L(a.B); Q(d, "SID", a.J); Q(d, "RID", c); Q(d, "AID", a.P); Ed(a, d); a.i && a.l && Ad(d, a.i, a.l); c = new K(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Jd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); kc(c, d, b); }
function Ed(a, b) { a.f && Lc({}, function (c, d) { Q(b, d, c); }); }
function Jd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ha, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var t = e[l].b, B = e[l].a;
        t -= f;
        if (0 > t)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                md(B, h, "req" + t + "_");
            }
            catch (z) {
                d && d(B);
            }
    }
    if (m) {
        d = h.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.U++; a.j = I(p(a.Aa, a), Id(a, a.o)); a.o++; return !0; }
g.Aa = function () { this.j = null; Ld(this); if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
} };
g.Sa = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this)); };
function xc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Ld(a) { a.a = new K(a, a.c, "rpc", a.U); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = L(a.la); Q(b, "RID", "rpc"); Q(b, "SID", a.J); Q(b, "CI", a.H ? "0" : "1"); Q(b, "AID", a.P); Ed(a, b); Q(b, "TYPE", "xmlhttp"); a.i && a.l && Ad(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = lc(L(b)); c.j = null; c.I = !0; mc(c, a); }
g.Ra = function () { null != this.m && (this.m = null, Bc(this), Cc(this), H(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Vb();
            d.dispatchEvent(new Yb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                P(a, 5);
                break;
            case 4:
                P(a, 10);
                break;
            case 3:
                P(a, 6);
                break;
            default: P(a, 2);
        } }
function Id(a, b) { var c = a.Fa + Math.floor(Math.random() * a.Ma); a.f || (c *= 2); return c * b; }
function P(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
}
else
    H(2); a.v = 0; a.f && a.f.ra(b); Fd(a); Dd(a); }
g.Xa = function (a) { a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1)); };
function Fd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = ad(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.W && Aa(a.W, function (f, h) { Q(d, h, f); }); b = a.A; c = a.na; b && c && Q(d, b, c); Q(d, "VER", a.ha); Ed(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Ka); b.F = a.C; return b; }
function Md() { }
g = Md.prototype;
g.ta = function () { };
g.sa = function () { };
g.ra = function () { };
g.qa = function () { };
g.Ha = function () { };
function Nd() { if (x && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport."); }
Nd.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Cd(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.S.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.S.removeEventListener.call(this, a, b, c, d); };
g.Oa = function () { this.a.f = this.f; this.h && (this.a.C = !0); var a = this.a, b = this.l, c = this.b || void 0; H(0); a.fa = b; a.W = c || {}; a.H = a.T; a.B = Fc(a, null, a.fa); Ic(a); };
g.close = function () { Jc(this.a); };
g.Pa = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Gd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a); };
g.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.S.G.call(this); };
function Od(a) { dc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Od, dc);
function Pd() { ec.call(this); this.status = 1; }
r(Pd, ec);
function Z(a) { this.a = a; }
r(Z, Md);
Z.prototype.ta = function () { this.a.dispatchEvent("a"); };
Z.prototype.sa = function (a) { this.a.dispatchEvent(new Od(a)); };
Z.prototype.ra = function (a) { this.a.dispatchEvent(new Pd(a)); };
Z.prototype.qa = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var esm = { createWebChannelTransport: function () { return new Nd; }, ErrorCode: Zb, EventType: $b, WebChannel: cc, XhrIo: X };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

/* harmony default export */ __webpack_exports__["default"] = (esm);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title style=\"font-family: 'Roboto Bold'; text-align: center\">Inicio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"LogOut()\">\r\n        SALIR\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"no-scroll\">\r\n  <div style=\"display: flex; flex-direction:column; height:100%\">\r\n\r\n  </div>\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/bienvenido/bienvenido-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/bienvenido/bienvenido-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BienvenidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageRoutingModule", function() { return BienvenidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");




const routes = [
    {
        path: '',
        component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_3__["BienvenidoPage"]
    }
];
let BienvenidoPageRoutingModule = class BienvenidoPageRoutingModule {
};
BienvenidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BienvenidoPageRoutingModule);



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.module.ts ***!
  \*************************************************/
/*! exports provided: BienvenidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bienvenido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bienvenido-routing.module */ "./src/app/bienvenido/bienvenido-routing.module.ts");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");







let BienvenidoPageModule = class BienvenidoPageModule {
};
BienvenidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bienvenido_routing_module__WEBPACK_IMPORTED_MODULE_5__["BienvenidoPageRoutingModule"]
        ],
        declarations: [_bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]]
    })
], BienvenidoPageModule);



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".botones {\n  height: 50%;\n  display: block;\n  justify-content: center;\n  --border-radius: 15px;\n  border-radius: 15px;\n  border: none !important;\n  outline: none;\n  font-family: \"Roboto\";\n  color: white;\n  font-size: 30px;\n}\n\n.ripple {\n  background-position: center;\n  transition: background 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmllbnZlbmlkby9iaWVudmVuaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYmllbnZlbmlkby9iaWVudmVuaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbmVze1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ucmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.ts ***!
  \***********************************************/
/*! exports provided: BienvenidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPage", function() { return BienvenidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _services_fotos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/fotos.service */ "./src/app/services/fotos.service.ts");
/* harmony import */ var _services_spinner_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/spinner-handler.service */ "./src/app/services/spinner-handler.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__);









let BienvenidoPage = class BienvenidoPage {
    constructor(router, navCtrl, errorHand, fotoService, spinnerHand, alertCtrl, authService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.errorHand = errorHand;
        this.fotoService = fotoService;
        this.spinnerHand = spinnerHand;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.image = null;
        this.spinner = null;
    }
    LogOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Error al ingresar!!');
            //this.router.navigateByUrl('/login');
            const alert = yield this.alertCtrl.create({
                cssClass: 'avisoAlert',
                header: '¿Desea cerrar sesión?',
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.spinner = yield this.spinnerHand.GetAllPageSpinner('Cerrando sesión.');
                            this.spinner.present();
                            Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__["timer"])(2000).subscribe(() => {
                                this.authService.onLogout().then(() => {
                                    this.navCtrl.navigateRoot('login', { replaceUrl: true });
                                }).catch(error => {
                                    this.errorHand.mostrarError(error);
                                }).finally(() => {
                                    //timer(2000).subscribe(()=>this.spinner.dismiss());
                                });
                            });
                        })
                    }]
            });
            yield alert.present();
        });
    }
    cosasLindasClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.ObtenerFoto('linda');
            this.navCtrl.navigateRoot('/cosas-lindas');
        });
    }
    //   public hacerClick()
    //   {
    //     console.log("Click cosas lindas");
    //   }
    cosasFeasClick() {
        console.log("Click cosas feas");
        this.navCtrl.navigateRoot('/cosas-feas');
        // this.ObtenerFoto('fea');
    }
};
BienvenidoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsHandler"] },
    { type: _services_fotos_service__WEBPACK_IMPORTED_MODULE_5__["FotosService"] },
    { type: _services_spinner_handler_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerHandlerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
BienvenidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienvenido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bienvenido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bienvenido.page.scss */ "./src/app/bienvenido/bienvenido.page.scss")).default]
    })
], BienvenidoPage);



/***/ }),

/***/ "./src/app/services/error-handler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsHandler", function() { return ErrorsHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
var ErrorsHandler_1;



let ErrorsHandler = ErrorsHandler_1 = class ErrorsHandler {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    mostrarError(error, title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("ocurrio un error", error);
            var errorMessage = this.getErrorMessage(error);
            const alert = yield this.alertCtrl.create({
                header: title ? title : "Error!",
                message: message ? message + errorMessage : errorMessage,
                buttons: ['Ok']
            });
            alert.present();
        });
    }
    mostrarErrorLiteral(error, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title ? title : "Error!",
                message: error,
                cssClass: 'error-alert',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    mostrarMensajeConfimación(mensaje, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: mensaje,
                cssClass: 'confirm-alert',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            alert.dismiss(false);
                            return false;
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            alert.dismiss(true);
                            return false;
                        }
                    }
                ]
            });
            return alert;
        });
    }
    getErrorMessage(error) {
        var mensaje = "Error desconocido";
        for (var i = 0; i < ErrorsHandler_1.knownErrors.length; i++) {
            if (error.code == ErrorsHandler_1.knownErrors[i].code) {
                mensaje = ErrorsHandler_1.knownErrors[i].message;
                break;
            }
        }
        return mensaje;
    }
};
ErrorsHandler.knownErrors = [
    {
        code: 'auth/email-already-in-use',
        message: "El correo ya existe"
    },
    {
        code: 'auth/user-not-found',
        message: "El correo no se encuentra registrado"
    },
    {
        code: 'auth/wrong-password',
        message: "Contraseña Incorrecta"
    },
    {
        code: "auth/network-request-failed",
        message: "No hay conexión a internet"
    },
    {
        code: "auth/invalid-email",
        message: "Correo inválido"
    },
    {
        code: "auth/weak-password",
        message: "La contraseña debe tener mínimo 6 caracteres"
    }
];
ErrorsHandler.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ErrorsHandler = ErrorsHandler_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorsHandler);



/***/ }),

/***/ "./src/app/services/fotos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/fotos.service.ts ***!
  \*******************************************/
/*! exports provided: FotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosService", function() { return FotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");







let FotosService = class FotosService {
    constructor(MiAuth, fireStorage, firestore, errorHand) {
        this.MiAuth = MiAuth;
        this.fireStorage = fireStorage;
        this.firestore = firestore;
        this.errorHand = errorHand;
    }
    /** Conecta con Cloud Firestore para subir el archivo de la foto */
    UploadToFirebase(pictureAux, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const picName = `${(yield this.MiAuth.currentUser).email.split('@')[0]}_${(new Date()).getTime()}`;
            const selfieRef = this.fireStorage.storage.ref(picName);
            selfieRef
                .putString(pictureAux, 'base64', { contentType: 'image/jpeg' })
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.fireStorage.ref(picName).getDownloadURL().subscribe(downloadLink => {
                    this.UploadToFirestore(downloadLink.toString(), type);
                    // this.errorHand.MostrarErrorSolo(data);
                });
                // this.errorHand.MostrarErrorSolo('Link obtenido (aka Imagen subida)');
            }));
        });
    }
    /** Conecta con firebase para subir los datos de la foto a la tabla de 'relVisual', así como el nuevo doc de votos a la tabla 'votos' */
    UploadToFirestore(downloadLink, type) {
        // Add a new document with a generated id.
        const addDoc = this.firestore.collection('relVisual').add({
            usuario: this.MiAuth.currentUser,
            link: downloadLink,
            tipo: type,
            votos: 0,
            fecha: (new Date()).getTime(),
        }).then(ref => {
            this.firestore.collection('votos').add({
                fotoId: ref.id,
                users: '[]'
            }).then(() => {
                this.errorHand.mostrarMensajeConfimación('Subida exitosa.');
            }).catch((err) => {
                // console.log('Error al añadir en Votos', err);
                ref.delete();
            });
        }).catch(err => {
            // console.log('Error al añadir en fotos', err);
        });
    }
    /** Conecta con firebase para obtener todas las fotos de la base sin filtrarlas */
    ObtenerFotos() {
        return this.firestore.collection('relVisual').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])((fotos) => {
            return fotos.map((a) => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    /** Esta no es de firebase, es un filtrado de fotos */
    FiltrarFotos(fotos, tipo) {
        const auxReturn = new Array();
        for (const foto of fotos) {
            if (foto.tipo === tipo) {
                auxReturn.push(foto);
            }
        }
        return auxReturn;
    }
    /** Esta no es de firebase, es una simple verificación */
    ValidarUser(user, arrayUsers) {
        let auxReturn = true;
        for (const userA of arrayUsers) {
            if (user === userA) {
                auxReturn = false;
            }
        }
        return auxReturn;
    }
    /** Conecta con Firebase para editar los votos de la foto y los usuarios que votaron */
    EditarFoto(foto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.spinner = await this.spinerService.GetAllPageSpinner('Espere...');
            //this.spinner.present();
            // console.log(foto.id);
            let votos = null;
            const user = (yield this.MiAuth.currentUser).email;
            yield this.firestore.collection('votos').ref.where('fotoId', '==', foto.id).get().then((documento) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                votos = documento.docs[0].data();
                votos.docId = documento.docs[0].id;
                // console.log('Encontré el voto', votos.users);
                const auxUsers = JSON.parse(votos.users);
                if (this.ValidarUser(user, auxUsers)) {
                    foto.votos++;
                    auxUsers.push(user);
                    votos.users = JSON.stringify(auxUsers);
                    // console.log('Voy a setear los votos');
                    this.firestore.collection('votos').doc(votos.docId).set({
                        fotoId: votos.fotoId,
                        users: votos.users
                    })
                        .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // console.log('Voy a setear la foto');
                        return yield this.firestore.collection('relVisual').doc(foto.id).set({
                            usuario: foto.usuario,
                            link: foto.link,
                            tipo: foto.tipo,
                            votos: foto.votos,
                            fecha: foto.fecha,
                        })
                            .catch(err => {
                            //this.spinner.dismiss();
                            // console.log('Error en set de la foto', err);
                        })
                            .then(() => {
                            //this.spinner.dismiss();
                        });
                    }))
                        .catch(err => {
                        //this.spinner.dismiss();
                        // console.log('Error en set de los votos', err);
                    });
                }
                else {
                    //this.spinner.dismiss();
                    this.errorHand.mostrarError('Usted ya ha votado en esta foto');
                }
            }));
        });
    }
};
FotosService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorsHandler"] }
];
FotosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FotosService);



/***/ }),

/***/ "./src/app/services/spinner-handler.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spinner-handler.service.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerHandlerService", function() { return SpinnerHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let SpinnerHandlerService = class SpinnerHandlerService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    GetAllPageSpinner(messageSpinner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                spinner: null,
                keyboardClose: true,
                message: '<div class="lds-hourglass"></div>' + messageSpinner,
                showBackdrop: false,
                duration: 2000,
                cssClass: 'spinner'
            });
            return loader;
        });
    }
};
SpinnerHandlerService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
SpinnerHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpinnerHandlerService);



/***/ })

}]);
//# sourceMappingURL=bienvenido-bienvenido-module-es2015.js.map