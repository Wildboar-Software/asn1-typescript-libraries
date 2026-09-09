/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { Bridged, _decode_Bridged, _encode_Bridged } from "../CSTA-capability-exchange/Bridged.ta.mjs";

import { CallCleared, _decode_CallCleared, _encode_CallCleared } from "../CSTA-capability-exchange/CallCleared.ta.mjs";

import { Conferenced, _decode_Conferenced, _encode_Conferenced } from "../CSTA-capability-exchange/Conferenced.ta.mjs";

import { ConnectionCleared, _decode_ConnectionCleared, _encode_ConnectionCleared } from "../CSTA-capability-exchange/ConnectionCleared.ta.mjs";

import { Delivered, _decode_Delivered, _encode_Delivered } from "../CSTA-capability-exchange/Delivered.ta.mjs";

import { DigitsDialed, _decode_DigitsDialed, _encode_DigitsDialed } from "../CSTA-capability-exchange/DigitsDialed.ta.mjs";

import { Diverted, _decode_Diverted, _encode_Diverted } from "../CSTA-capability-exchange/Diverted.ta.mjs";

import { Established, _decode_Established, _encode_Established } from "../CSTA-capability-exchange/Established.ta.mjs";

import { Failed, _decode_Failed, _encode_Failed } from "../CSTA-capability-exchange/Failed.ta.mjs";

import { Held, _decode_Held, _encode_Held } from "../CSTA-capability-exchange/Held.ta.mjs";

import { NetwCapsChanged, _decode_NetwCapsChanged, _encode_NetwCapsChanged } from "../CSTA-capability-exchange/NetwCapsChanged.ta.mjs";

import { NetwReached, _decode_NetwReached, _encode_NetwReached } from "../CSTA-capability-exchange/NetwReached.ta.mjs";

import { Offered, _decode_Offered, _encode_Offered } from "../CSTA-capability-exchange/Offered.ta.mjs";

import { Originated, _decode_Originated, _encode_Originated } from "../CSTA-capability-exchange/Originated.ta.mjs";

import { Queued, _decode_Queued, _encode_Queued } from "../CSTA-capability-exchange/Queued.ta.mjs";

import { Retrieved, _decode_Retrieved, _encode_Retrieved } from "../CSTA-capability-exchange/Retrieved.ta.mjs";

import { ServiceInitiated, _decode_ServiceInitiated, _encode_ServiceInitiated } from "../CSTA-capability-exchange/ServiceInitiated.ta.mjs";

import { Transferred, _decode_Transferred, _encode_Transferred } from "../CSTA-capability-exchange/Transferred.ta.mjs";



/**
 * @summary CallControlEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlEvtsList ::= SEQUENCE
 * {     bridged             [ 0] IMPLICIT     Bridged         OPTIONAL,
 *     callCleared             [ 1] IMPLICIT     CallCleared         OPTIONAL,
 *     conferenced             [ 2] IMPLICIT     Conferenced         OPTIONAL,
 *     connectionCleared         [ 3] IMPLICIT     ConnectionCleared     OPTIONAL,
 *     delivered             [ 4] IMPLICIT     Delivered         OPTIONAL,
 *     digitsDialed             [ 5] IMPLICIT     DigitsDialed         OPTIONAL,
 *     diverted             [ 6] IMPLICIT     Diverted         OPTIONAL,
 *     established             [ 7] IMPLICIT     Established         OPTIONAL,
 *     failed                 [ 8] IMPLICIT     Failed             OPTIONAL,
 *     held                 [ 9] IMPLICIT     Held             OPTIONAL,
 *     netwCapsChanged         [10] IMPLICIT     NetwCapsChanged     OPTIONAL,
 *     netwReached             [11] IMPLICIT     NetwReached         OPTIONAL,
 *     offered             [12] IMPLICIT     Offered         OPTIONAL,
 *     originated             [13] IMPLICIT     Originated         OPTIONAL,
 *     queued                 [14] IMPLICIT     Queued             OPTIONAL,
 *     retrieved             [15] IMPLICIT     Retrieved         OPTIONAL,
 *     serviceInitiated         [16] IMPLICIT     ServiceInitiated     OPTIONAL,
 *     transferred             [17] IMPLICIT     Transferred         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallControlEvtsList {
    constructor (
        /**
         * @summary `bridged`.
         * @public
         * @readonly
         */
        readonly bridged: OPTIONAL<Bridged>,
        /**
         * @summary `callCleared`.
         * @public
         * @readonly
         */
        readonly callCleared: OPTIONAL<CallCleared>,
        /**
         * @summary `conferenced`.
         * @public
         * @readonly
         */
        readonly conferenced: OPTIONAL<Conferenced>,
        /**
         * @summary `connectionCleared`.
         * @public
         * @readonly
         */
        readonly connectionCleared: OPTIONAL<ConnectionCleared>,
        /**
         * @summary `delivered`.
         * @public
         * @readonly
         */
        readonly delivered: OPTIONAL<Delivered>,
        /**
         * @summary `digitsDialed`.
         * @public
         * @readonly
         */
        readonly digitsDialed: OPTIONAL<DigitsDialed>,
        /**
         * @summary `diverted`.
         * @public
         * @readonly
         */
        readonly diverted: OPTIONAL<Diverted>,
        /**
         * @summary `established`.
         * @public
         * @readonly
         */
        readonly established: OPTIONAL<Established>,
        /**
         * @summary `failed`.
         * @public
         * @readonly
         */
        readonly failed: OPTIONAL<Failed>,
        /**
         * @summary `held`.
         * @public
         * @readonly
         */
        readonly held: OPTIONAL<Held>,
        /**
         * @summary `netwCapsChanged`.
         * @public
         * @readonly
         */
        readonly netwCapsChanged: OPTIONAL<NetwCapsChanged>,
        /**
         * @summary `netwReached`.
         * @public
         * @readonly
         */
        readonly netwReached: OPTIONAL<NetwReached>,
        /**
         * @summary `offered`.
         * @public
         * @readonly
         */
        readonly offered: OPTIONAL<Offered>,
        /**
         * @summary `originated`.
         * @public
         * @readonly
         */
        readonly originated: OPTIONAL<Originated>,
        /**
         * @summary `queued`.
         * @public
         * @readonly
         */
        readonly queued: OPTIONAL<Queued>,
        /**
         * @summary `retrieved`.
         * @public
         * @readonly
         */
        readonly retrieved: OPTIONAL<Retrieved>,
        /**
         * @summary `serviceInitiated`.
         * @public
         * @readonly
         */
        readonly serviceInitiated: OPTIONAL<ServiceInitiated>,
        /**
         * @summary `transferred`.
         * @public
         * @readonly
         */
        readonly transferred: OPTIONAL<Transferred>
    ) {}

    /**
     * @summary Restructures an object into a CallControlEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `CallControlEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallControlEvtsList`.
     * @returns {CallControlEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (CallControlEvtsList)]: (CallControlEvtsList)[_K] }): CallControlEvtsList {
        return new CallControlEvtsList(_o.bridged, _o.callCleared, _o.conferenced, _o.connectionCleared, _o.delivered, _o.digitsDialed, _o.diverted, _o.established, _o.failed, _o.held, _o.netwCapsChanged, _o.netwReached, _o.offered, _o.originated, _o.queued, _o.retrieved, _o.serviceInitiated, _o.transferred);
    }


}

/**
 * @summary The Leading Root Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("bridged", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callCleared", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("conferenced", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("connectionCleared", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("delivered", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("digitsDialed", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("diverted", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("established", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("failed", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("held", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("netwCapsChanged", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("netwReached", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("offered", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("originated", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("queued", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("retrieved", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("serviceInitiated", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("transferred", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallControlEvtsList: $.ASN1Decoder<CallControlEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlEvtsList (el: _Element): CallControlEvtsList {
    if (!_cached_decoder_for_CallControlEvtsList) { _cached_decoder_for_CallControlEvtsList = function (el: _Element): CallControlEvtsList {
    let bridged: OPTIONAL<Bridged>;
    let callCleared: OPTIONAL<CallCleared>;
    let conferenced: OPTIONAL<Conferenced>;
    let connectionCleared: OPTIONAL<ConnectionCleared>;
    let delivered: OPTIONAL<Delivered>;
    let digitsDialed: OPTIONAL<DigitsDialed>;
    let diverted: OPTIONAL<Diverted>;
    let established: OPTIONAL<Established>;
    let failed: OPTIONAL<Failed>;
    let held: OPTIONAL<Held>;
    let netwCapsChanged: OPTIONAL<NetwCapsChanged>;
    let netwReached: OPTIONAL<NetwReached>;
    let offered: OPTIONAL<Offered>;
    let originated: OPTIONAL<Originated>;
    let queued: OPTIONAL<Queued>;
    let retrieved: OPTIONAL<Retrieved>;
    let serviceInitiated: OPTIONAL<ServiceInitiated>;
    let transferred: OPTIONAL<Transferred>;
    const callbacks: $.DecodingMap = {
        "bridged": (_el: _Element): void => { bridged = $._decode_implicit<Bridged>(() => _decode_Bridged)(_el); },
        "callCleared": (_el: _Element): void => { callCleared = $._decode_implicit<CallCleared>(() => _decode_CallCleared)(_el); },
        "conferenced": (_el: _Element): void => { conferenced = $._decode_implicit<Conferenced>(() => _decode_Conferenced)(_el); },
        "connectionCleared": (_el: _Element): void => { connectionCleared = $._decode_implicit<ConnectionCleared>(() => _decode_ConnectionCleared)(_el); },
        "delivered": (_el: _Element): void => { delivered = $._decode_implicit<Delivered>(() => _decode_Delivered)(_el); },
        "digitsDialed": (_el: _Element): void => { digitsDialed = $._decode_implicit<DigitsDialed>(() => _decode_DigitsDialed)(_el); },
        "diverted": (_el: _Element): void => { diverted = $._decode_implicit<Diverted>(() => _decode_Diverted)(_el); },
        "established": (_el: _Element): void => { established = $._decode_implicit<Established>(() => _decode_Established)(_el); },
        "failed": (_el: _Element): void => { failed = $._decode_implicit<Failed>(() => _decode_Failed)(_el); },
        "held": (_el: _Element): void => { held = $._decode_implicit<Held>(() => _decode_Held)(_el); },
        "netwCapsChanged": (_el: _Element): void => { netwCapsChanged = $._decode_implicit<NetwCapsChanged>(() => _decode_NetwCapsChanged)(_el); },
        "netwReached": (_el: _Element): void => { netwReached = $._decode_implicit<NetwReached>(() => _decode_NetwReached)(_el); },
        "offered": (_el: _Element): void => { offered = $._decode_implicit<Offered>(() => _decode_Offered)(_el); },
        "originated": (_el: _Element): void => { originated = $._decode_implicit<Originated>(() => _decode_Originated)(_el); },
        "queued": (_el: _Element): void => { queued = $._decode_implicit<Queued>(() => _decode_Queued)(_el); },
        "retrieved": (_el: _Element): void => { retrieved = $._decode_implicit<Retrieved>(() => _decode_Retrieved)(_el); },
        "serviceInitiated": (_el: _Element): void => { serviceInitiated = $._decode_implicit<ServiceInitiated>(() => _decode_ServiceInitiated)(_el); },
        "transferred": (_el: _Element): void => { transferred = $._decode_implicit<Transferred>(() => _decode_Transferred)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallControlEvtsList,
        _extension_additions_list_spec_for_CallControlEvtsList,
        _root_component_type_list_2_spec_for_CallControlEvtsList,
        undefined,
    );
    return new CallControlEvtsList(
        bridged,
        callCleared,
        conferenced,
        connectionCleared,
        delivered,
        digitsDialed,
        diverted,
        established,
        failed,
        held,
        netwCapsChanged,
        netwReached,
        offered,
        originated,
        queued,
        retrieved,
        serviceInitiated,
        transferred
    );
}; }
    return _cached_decoder_for_CallControlEvtsList(el);
}

let _cached_encoder_for_CallControlEvtsList: $.ASN1Encoder<CallControlEvtsList> | null = null;

/**
 * @summary Encodes a(n) CallControlEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlEvtsList (value: CallControlEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlEvtsList) { _cached_encoder_for_CallControlEvtsList = function (value: CallControlEvtsList, elGetter: $.ASN1Encoder<CallControlEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bridged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Bridged, $.BER)(value.bridged, $.BER)),
            /* IF_ABSENT  */ ((value.callCleared === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallCleared, $.BER)(value.callCleared, $.BER)),
            /* IF_ABSENT  */ ((value.conferenced === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Conferenced, $.BER)(value.conferenced, $.BER)),
            /* IF_ABSENT  */ ((value.connectionCleared === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ConnectionCleared, $.BER)(value.connectionCleared, $.BER)),
            /* IF_ABSENT  */ ((value.delivered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Delivered, $.BER)(value.delivered, $.BER)),
            /* IF_ABSENT  */ ((value.digitsDialed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DigitsDialed, $.BER)(value.digitsDialed, $.BER)),
            /* IF_ABSENT  */ ((value.diverted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Diverted, $.BER)(value.diverted, $.BER)),
            /* IF_ABSENT  */ ((value.established === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Established, $.BER)(value.established, $.BER)),
            /* IF_ABSENT  */ ((value.failed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Failed, $.BER)(value.failed, $.BER)),
            /* IF_ABSENT  */ ((value.held === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Held, $.BER)(value.held, $.BER)),
            /* IF_ABSENT  */ ((value.netwCapsChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_NetwCapsChanged, $.BER)(value.netwCapsChanged, $.BER)),
            /* IF_ABSENT  */ ((value.netwReached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_NetwReached, $.BER)(value.netwReached, $.BER)),
            /* IF_ABSENT  */ ((value.offered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Offered, $.BER)(value.offered, $.BER)),
            /* IF_ABSENT  */ ((value.originated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Originated, $.BER)(value.originated, $.BER)),
            /* IF_ABSENT  */ ((value.queued === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Queued, $.BER)(value.queued, $.BER)),
            /* IF_ABSENT  */ ((value.retrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_Retrieved, $.BER)(value.retrieved, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInitiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_ServiceInitiated, $.BER)(value.serviceInitiated, $.BER)),
            /* IF_ABSENT  */ ((value.transferred === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Transferred, $.BER)(value.transferred, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallControlEvtsList(value, elGetter);
}


/* eslint-enable */
