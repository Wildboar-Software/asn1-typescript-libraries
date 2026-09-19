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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";
// export { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary SMFStartOfInterceptionWithConnectedProSeRemoteUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFStartOfInterceptionWithConnectedProSeRemoteUE ::= SEQUENCE
 * {
 *     sUPI                     [1] SUPI,
 *     gPSI                     [2] GPSI OPTIONAL,
 *     pEI                      [3] PEI OPTIONAL,
 *     pDUSessionID             [4] PDUSessionID,
 *     remoteUEContextConnected [5] RemoteUEContextList OPTIONAL,
 *     location                 [6] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFStartOfInterceptionWithConnectedProSeRemoteUE {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `remoteUEContextConnected`.
         * @public
         * @readonly
         */
        readonly remoteUEContextConnected: OPTIONAL<RemoteUEContextList>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a SMFStartOfInterceptionWithConnectedProSeRemoteUE
     * @description
     * 
     * This takes an `object` and converts it to a `SMFStartOfInterceptionWithConnectedProSeRemoteUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFStartOfInterceptionWithConnectedProSeRemoteUE`.
     * @returns {SMFStartOfInterceptionWithConnectedProSeRemoteUE}
     */
    public static _from_object (_o: { [_K in keyof (SMFStartOfInterceptionWithConnectedProSeRemoteUE)]: (SMFStartOfInterceptionWithConnectedProSeRemoteUE)[_K] }): SMFStartOfInterceptionWithConnectedProSeRemoteUE {
        return new SMFStartOfInterceptionWithConnectedProSeRemoteUE(_o.sUPI, _o.gPSI, _o.pEI, _o.pDUSessionID, _o.remoteUEContextConnected, _o.location);
    }


}

/**
 * @summary The Leading Root Component Types of SMFStartOfInterceptionWithConnectedProSeRemoteUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("remoteUEContextConnected", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of SMFStartOfInterceptionWithConnectedProSeRemoteUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFStartOfInterceptionWithConnectedProSeRemoteUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE: $.ASN1Decoder<SMFStartOfInterceptionWithConnectedProSeRemoteUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFStartOfInterceptionWithConnectedProSeRemoteUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFStartOfInterceptionWithConnectedProSeRemoteUE (el: _Element): SMFStartOfInterceptionWithConnectedProSeRemoteUE {
    if (!_cached_decoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE) { _cached_decoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE = function (el: _Element): SMFStartOfInterceptionWithConnectedProSeRemoteUE {
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let pEI: OPTIONAL<PEI>;
    let pDUSessionID!: PDUSessionID;
    let remoteUEContextConnected: OPTIONAL<RemoteUEContextList>;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "remoteUEContextConnected": (_el: _Element): void => { remoteUEContextConnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE,
        _extension_additions_list_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE,
        _root_component_type_list_2_spec_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE,
        undefined,
    );
    return new SMFStartOfInterceptionWithConnectedProSeRemoteUE(
        sUPI,
        gPSI,
        pEI,
        pDUSessionID,
        remoteUEContextConnected,
        location
    );
}; }
    return _cached_decoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE(el);
}

let _cached_encoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE: $.ASN1Encoder<SMFStartOfInterceptionWithConnectedProSeRemoteUE> | null = null;

/**
 * @summary Encodes a(n) SMFStartOfInterceptionWithConnectedProSeRemoteUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFStartOfInterceptionWithConnectedProSeRemoteUE, encoded as an ASN.1 Element.
 */
export
function _encode_SMFStartOfInterceptionWithConnectedProSeRemoteUE (value: SMFStartOfInterceptionWithConnectedProSeRemoteUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE) { _cached_encoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE = function (value: SMFStartOfInterceptionWithConnectedProSeRemoteUE, elGetter: $.ASN1Encoder<SMFStartOfInterceptionWithConnectedProSeRemoteUE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.remoteUEContextConnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEContextConnected, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFStartOfInterceptionWithConnectedProSeRemoteUE(value, elGetter);
}


/* eslint-enable */
