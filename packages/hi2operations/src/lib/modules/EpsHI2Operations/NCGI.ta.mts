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
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../EpsHI2Operations/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../EpsHI2Operations/PLMNID.ta.mjs";
import { NRCellID, _decode_NRCellID, _encode_NRCellID } from "../EpsHI2Operations/NRCellID.ta.mjs";
// export { NRCellID, _decode_NRCellID, _encode_NRCellID } from "../EpsHI2Operations/NRCellID.ta.mjs";


/**
 * @summary NCGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCGI ::= SEQUENCE
 * {
 *  pLMNID [1] PLMNID,
 *  nRCellID [2] NRCellID,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class NCGI {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `nRCellID`.
         * @public
         * @readonly
         */
        readonly nRCellID: NRCellID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NCGI
     * @description
     * 
     * This takes an `object` and converts it to a `NCGI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NCGI`.
     * @returns {NCGI}
     */
    public static _from_object (_o: { [_K in keyof (NCGI)]: (NCGI)[_K] }): NCGI {
        return new NCGI(_o.pLMNID, _o.nRCellID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NCGI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nRCellID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NCGI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NCGI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NCGI: $.ASN1Decoder<NCGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NCGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NCGI (el: _Element): NCGI {
    if (!_cached_decoder_for_NCGI) { _cached_decoder_for_NCGI = function (el: _Element): NCGI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NCGI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "nRCellID";
    let pLMNID!: PLMNID;
    let nRCellID!: NRCellID;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    nRCellID = $._decode_implicit<NRCellID>(() => _decode_NRCellID)(sequence[1]);
    return new NCGI(
        pLMNID,
        nRCellID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_NCGI(el);
}

let _cached_encoder_for_NCGI: $.ASN1Encoder<NCGI> | null = null;

/**
 * @summary Encodes a(n) NCGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCGI, encoded as an ASN.1 Element.
 */
export
function _encode_NCGI (value: NCGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NCGI) { _cached_encoder_for_NCGI = function (value: NCGI, elGetter: $.ASN1Encoder<NCGI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NRCellID, $.BER)(value.nRCellID, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NCGI(value, elGetter);
}


/* eslint-enable */
