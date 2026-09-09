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
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";



/**
 * @summary ContinueGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueGPRSArg ::= SEQUENCE {
 *     pDPID                [0] PDPID                    OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ContinueGPRSArg {
    constructor (
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinueGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueGPRSArg`.
     * @returns {ContinueGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ContinueGPRSArg)]: (ContinueGPRSArg)[_K] }): ContinueGPRSArg {
        return new ContinueGPRSArg(_o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContinueGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ContinueGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContinueGPRSArg: $.ASN1Decoder<ContinueGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueGPRSArg (el: _Element): ContinueGPRSArg {
    if (!_cached_decoder_for_ContinueGPRSArg) { _cached_decoder_for_ContinueGPRSArg = function (el: _Element): ContinueGPRSArg {
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueGPRSArg,
        _extension_additions_list_spec_for_ContinueGPRSArg,
        _root_component_type_list_2_spec_for_ContinueGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueGPRSArg(
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueGPRSArg(el);
}

let _cached_encoder_for_ContinueGPRSArg: $.ASN1Encoder<ContinueGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ContinueGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueGPRSArg (value: ContinueGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueGPRSArg) { _cached_encoder_for_ContinueGPRSArg = function (value: ContinueGPRSArg, elGetter: $.ASN1Encoder<ContinueGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContinueGPRSArg(value, elGetter);
}


/* eslint-enable */
