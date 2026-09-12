/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { ReportSemaphoreEntryStatus_Request_state, _decode_ReportSemaphoreEntryStatus_Request_state, _encode_ReportSemaphoreEntryStatus_Request_state } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Request-state.ta.mjs";
// export { ReportSemaphoreEntryStatus_Request_state, ReportSemaphoreEntryStatus_Request_state_queued /* IMPORTED_LONG_NAMED_INTEGER */, queued /* IMPORTED_SHORT_NAMED_INTEGER */, ReportSemaphoreEntryStatus_Request_state_owner /* IMPORTED_LONG_NAMED_INTEGER */, owner /* IMPORTED_SHORT_NAMED_INTEGER */, ReportSemaphoreEntryStatus_Request_state_hung /* IMPORTED_LONG_NAMED_INTEGER */, hung /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ReportSemaphoreEntryStatus_Request_state, _encode_ReportSemaphoreEntryStatus_Request_state } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Request-state.ta.mjs";


/**
 * @summary ReportSemaphoreEntryStatus_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreEntryStatus-Request ::= SEQUENCE {
 *    semaphoreName              [0] ObjectName,
 *    state                      [1] IMPLICIT INTEGER {
 *        queued                     (0),
 *        owner                      (1),
 *        hung                       (2) } (0..2),
 *    entryIDToStartAfter        [2] IMPLICIT OCTET STRING OPTIONAL   }
 * ```
 * 
 * @class
 */
export
class ReportSemaphoreEntryStatus_Request {
    constructor (
        /**
         * @summary `semaphoreName`.
         * @public
         * @readonly
         */
        readonly semaphoreName: ObjectName,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: ReportSemaphoreEntryStatus_Request_state,
        /**
         * @summary `entryIDToStartAfter`.
         * @public
         * @readonly
         */
        readonly entryIDToStartAfter: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ReportSemaphoreEntryStatus_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ReportSemaphoreEntryStatus_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportSemaphoreEntryStatus_Request`.
     * @returns {ReportSemaphoreEntryStatus_Request}
     */
    public static _from_object (_o: { [_K in keyof (ReportSemaphoreEntryStatus_Request)]: (ReportSemaphoreEntryStatus_Request)[_K] }): ReportSemaphoreEntryStatus_Request {
        return new ReportSemaphoreEntryStatus_Request(_o.semaphoreName, _o.state, _o.entryIDToStartAfter);
    }


}

/**
 * @summary The Leading Root Component Types of ReportSemaphoreEntryStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportSemaphoreEntryStatus_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("semaphoreName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("state", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entryIDToStartAfter", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReportSemaphoreEntryStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportSemaphoreEntryStatus_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportSemaphoreEntryStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportSemaphoreEntryStatus_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportSemaphoreEntryStatus_Request: $.ASN1Decoder<ReportSemaphoreEntryStatus_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSemaphoreEntryStatus_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSemaphoreEntryStatus_Request (el: _Element): ReportSemaphoreEntryStatus_Request {
    if (!_cached_decoder_for_ReportSemaphoreEntryStatus_Request) { _cached_decoder_for_ReportSemaphoreEntryStatus_Request = function (el: _Element): ReportSemaphoreEntryStatus_Request {
    let semaphoreName!: ObjectName;
    let state!: ReportSemaphoreEntryStatus_Request_state;
    let entryIDToStartAfter: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "semaphoreName": (_el: _Element): void => { semaphoreName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<ReportSemaphoreEntryStatus_Request_state>(() => _decode_ReportSemaphoreEntryStatus_Request_state)(_el); },
        "entryIDToStartAfter": (_el: _Element): void => { entryIDToStartAfter = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportSemaphoreEntryStatus_Request,
        _extension_additions_list_spec_for_ReportSemaphoreEntryStatus_Request,
        _root_component_type_list_2_spec_for_ReportSemaphoreEntryStatus_Request,
        undefined,
    );
    return new ReportSemaphoreEntryStatus_Request(
        semaphoreName,
        state,
        entryIDToStartAfter
    );
}; }
    return _cached_decoder_for_ReportSemaphoreEntryStatus_Request(el);
}

let _cached_encoder_for_ReportSemaphoreEntryStatus_Request: $.ASN1Encoder<ReportSemaphoreEntryStatus_Request> | null = null;

/**
 * @summary Encodes a(n) ReportSemaphoreEntryStatus_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSemaphoreEntryStatus_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSemaphoreEntryStatus_Request (value: ReportSemaphoreEntryStatus_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSemaphoreEntryStatus_Request) { _cached_encoder_for_ReportSemaphoreEntryStatus_Request = function (value: ReportSemaphoreEntryStatus_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.semaphoreName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReportSemaphoreEntryStatus_Request_state, $.BER)(value.state, $.BER),
            /* IF_ABSENT  */ ((value.entryIDToStartAfter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.entryIDToStartAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportSemaphoreEntryStatus_Request(value, elGetter);
}


/* eslint-enable */
