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
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { Ct, _enum_for_Ct, Ct_voicebandInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, voicebandInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Ct_circuitModeData /* IMPORTED_LONG_ENUMERATION_ITEM */, circuitModeData /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Ct, _encode_Ct } from "../AIN-Parameters/Ct.ta.mjs";
// export { Ct, _enum_for_Ct, Ct_voicebandInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, voicebandInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Ct_circuitModeData /* IMPORTED_LONG_ENUMERATION_ITEM */, circuitModeData /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Ct, _encode_Ct } from "../AIN-Parameters/Ct.ta.mjs";


/**
 * @summary DnCtID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnCtID ::= SEQUENCE{
 *         dn [1] IMPLICIT Dn, --see Section 6.151 of this GR for encoding
 *         ct [2] IMPLICIT Ct
 *     }
 * ```
 * 
 * @class
 */
export
class DnCtID {
    constructor (
        /**
         * @summary `dn`.
         * @public
         * @readonly
         */
        readonly dn: Dn,
        /**
         * @summary `ct`.
         * @public
         * @readonly
         */
        readonly ct: Ct
    ) {}

    /**
     * @summary Restructures an object into a DnCtID
     * @description
     * 
     * This takes an `object` and converts it to a `DnCtID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DnCtID`.
     * @returns {DnCtID}
     */
    public static _from_object (_o: { [_K in keyof (DnCtID)]: (DnCtID)[_K] }): DnCtID {
        return new DnCtID(_o.dn, _o.ct);
    }

        /**
         * @summary The enum used as the type of the component `ct`
         * @public
         * @static
         */

    public static _enum_for_ct = _enum_for_Ct;
}

/**
 * @summary The Leading Root Component Types of DnCtID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DnCtID: $.ComponentSpec[] = [
    new $.ComponentSpec("dn", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ct", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DnCtID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DnCtID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DnCtID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DnCtID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DnCtID: $.ASN1Decoder<DnCtID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DnCtID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DnCtID (el: _Element): DnCtID {
    if (!_cached_decoder_for_DnCtID) { _cached_decoder_for_DnCtID = function (el: _Element): DnCtID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DnCtID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dn";
    sequence[1].name = "ct";
    let dn!: Dn;
    let ct!: Ct;
    dn = $._decode_implicit<Dn>(() => _decode_Dn)(sequence[0]);
    ct = $._decode_implicit<Ct>(() => _decode_Ct)(sequence[1]);
    return new DnCtID(
        dn,
        ct,

    );
}; }
    return _cached_decoder_for_DnCtID(el);
}

let _cached_encoder_for_DnCtID: $.ASN1Encoder<DnCtID> | null = null;

/**
 * @summary Encodes a(n) DnCtID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DnCtID, encoded as an ASN.1 Element.
 */
export
function _encode_DnCtID (value: DnCtID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DnCtID) { _cached_encoder_for_DnCtID = function (value: DnCtID, elGetter: $.ASN1Encoder<DnCtID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER)(value.dn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Ct, $.BER)(value.ct, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DnCtID(value, elGetter);
}


/* eslint-enable */
