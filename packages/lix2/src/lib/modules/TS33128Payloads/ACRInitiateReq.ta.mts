/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
import { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
// export { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";


/**
 * @summary ACRInitiateReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInitiateReq ::= SEQUENCE
 * {
 *     eASID                   [1] EASID OPTIONAL,
 *     aCID                    [2] ACID OPTIONAL,
 *     tEASEndpoint            [3] EASEndpoint,
 *     sEASEndpoint            [4] EASEndpoint OPTIONAL,
 *     previousTEASEndpoint    [5] EASEndpoint OPTIONAL,
 *     routeReq                [6] RouteToLocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ACRInitiateReq {
    constructor (
        /**
         * @summary `eASID`.
         * @public
         * @readonly
         */
        readonly eASID: OPTIONAL<EASID>,
        /**
         * @summary `aCID`.
         * @public
         * @readonly
         */
        readonly aCID: OPTIONAL<ACID>,
        /**
         * @summary `tEASEndpoint`.
         * @public
         * @readonly
         */
        readonly tEASEndpoint: EASEndpoint,
        /**
         * @summary `sEASEndpoint`.
         * @public
         * @readonly
         */
        readonly sEASEndpoint: OPTIONAL<EASEndpoint>,
        /**
         * @summary `previousTEASEndpoint`.
         * @public
         * @readonly
         */
        readonly previousTEASEndpoint: OPTIONAL<EASEndpoint>,
        /**
         * @summary `routeReq`.
         * @public
         * @readonly
         */
        readonly routeReq: OPTIONAL<RouteToLocation>
    ) {}

    /**
     * @summary Restructures an object into a ACRInitiateReq
     * @description
     * 
     * This takes an `object` and converts it to a `ACRInitiateReq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACRInitiateReq`.
     * @returns {ACRInitiateReq}
     */
    public static _from_object (_o: { [_K in keyof (ACRInitiateReq)]: (ACRInitiateReq)[_K] }): ACRInitiateReq {
        return new ACRInitiateReq(_o.eASID, _o.aCID, _o.tEASEndpoint, _o.sEASEndpoint, _o.previousTEASEndpoint, _o.routeReq);
    }


}

/**
 * @summary The Leading Root Component Types of ACRInitiateReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ACRInitiateReq: $.ComponentSpec[] = [
    new $.ComponentSpec("eASID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tEASEndpoint", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sEASEndpoint", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("previousTEASEndpoint", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("routeReq", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ACRInitiateReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ACRInitiateReq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ACRInitiateReq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ACRInitiateReq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ACRInitiateReq: $.ASN1Decoder<ACRInitiateReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRInitiateReq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACRInitiateReq (el: _Element): ACRInitiateReq {
    if (!_cached_decoder_for_ACRInitiateReq) { _cached_decoder_for_ACRInitiateReq = function (el: _Element): ACRInitiateReq {
    let eASID: OPTIONAL<EASID>;
    let aCID: OPTIONAL<ACID>;
    let tEASEndpoint!: EASEndpoint;
    let sEASEndpoint: OPTIONAL<EASEndpoint>;
    let previousTEASEndpoint: OPTIONAL<EASEndpoint>;
    let routeReq: OPTIONAL<RouteToLocation>;
    const callbacks: $.DecodingMap = {
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "aCID": (_el: _Element): void => { aCID = $._decode_implicit<ACID>(() => _decode_ACID)(_el); },
        "tEASEndpoint": (_el: _Element): void => { tEASEndpoint = $._decode_implicit<EASEndpoint>(() => _decode_EASEndpoint)(_el); },
        "sEASEndpoint": (_el: _Element): void => { sEASEndpoint = $._decode_implicit<EASEndpoint>(() => _decode_EASEndpoint)(_el); },
        "previousTEASEndpoint": (_el: _Element): void => { previousTEASEndpoint = $._decode_implicit<EASEndpoint>(() => _decode_EASEndpoint)(_el); },
        "routeReq": (_el: _Element): void => { routeReq = $._decode_implicit<RouteToLocation>(() => _decode_RouteToLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACRInitiateReq,
        _extension_additions_list_spec_for_ACRInitiateReq,
        _root_component_type_list_2_spec_for_ACRInitiateReq,
        undefined,
    );
    return new ACRInitiateReq(
        eASID,
        aCID,
        tEASEndpoint,
        sEASEndpoint,
        previousTEASEndpoint,
        routeReq
    );
}; }
    return _cached_decoder_for_ACRInitiateReq(el);
}

let _cached_encoder_for_ACRInitiateReq: $.ASN1Encoder<ACRInitiateReq> | null = null;

/**
 * @summary Encodes a(n) ACRInitiateReq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRInitiateReq, encoded as an ASN.1 Element.
 */
export
function _encode_ACRInitiateReq (value: ACRInitiateReq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACRInitiateReq) { _cached_encoder_for_ACRInitiateReq = function (value: ACRInitiateReq, elGetter: $.ASN1Encoder<ACRInitiateReq>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eASID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER)),
            /* IF_ABSENT  */ ((value.aCID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ACID, $.BER)(value.aCID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EASEndpoint, $.BER)(value.tEASEndpoint, $.BER),
            /* IF_ABSENT  */ ((value.sEASEndpoint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EASEndpoint, $.BER)(value.sEASEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.previousTEASEndpoint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EASEndpoint, $.BER)(value.previousTEASEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.routeReq === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RouteToLocation, $.BER)(value.routeReq, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ACRInitiateReq(value, elGetter);
}


/* eslint-enable */
