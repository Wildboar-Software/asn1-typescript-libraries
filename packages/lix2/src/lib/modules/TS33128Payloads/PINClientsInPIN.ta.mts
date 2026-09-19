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
import { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
// export { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
import { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
// export { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
import { PINClientProfile, _decode_PINClientProfile, _encode_PINClientProfile } from "../TS33128Payloads/PINClientProfile.ta.mjs";
// export { PINClientProfile, _decode_PINClientProfile, _encode_PINClientProfile } from "../TS33128Payloads/PINClientProfile.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary PINClientsInPIN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientsInPIN ::= SEQUENCE
 * {
 *     pINID                   [1] PINID,
 *     pINServerID             [2] PINServerID,
 *     pINClientProfiles       [3] SEQUENCE OF PINClientProfile,
 *     pINProfile              [4] XMLType
 * }
 * ```
 * 
 * @class
 */
export
class PINClientsInPIN {
    constructor (
        /**
         * @summary `pINID`.
         * @public
         * @readonly
         */
        readonly pINID: PINID,
        /**
         * @summary `pINServerID`.
         * @public
         * @readonly
         */
        readonly pINServerID: PINServerID,
        /**
         * @summary `pINClientProfiles`.
         * @public
         * @readonly
         */
        readonly pINClientProfiles: PINClientProfile[],
        /**
         * @summary `pINProfile`.
         * @public
         * @readonly
         */
        readonly pINProfile: XMLType
    ) {}

    /**
     * @summary Restructures an object into a PINClientsInPIN
     * @description
     * 
     * This takes an `object` and converts it to a `PINClientsInPIN`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PINClientsInPIN`.
     * @returns {PINClientsInPIN}
     */
    public static _from_object (_o: { [_K in keyof (PINClientsInPIN)]: (PINClientsInPIN)[_K] }): PINClientsInPIN {
        return new PINClientsInPIN(_o.pINID, _o.pINServerID, _o.pINClientProfiles, _o.pINProfile);
    }


}

/**
 * @summary The Leading Root Component Types of PINClientsInPIN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PINClientsInPIN: $.ComponentSpec[] = [
    new $.ComponentSpec("pINID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pINServerID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pINClientProfiles", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pINProfile", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PINClientsInPIN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PINClientsInPIN: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PINClientsInPIN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PINClientsInPIN: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PINClientsInPIN: $.ASN1Decoder<PINClientsInPIN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINClientsInPIN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINClientsInPIN (el: _Element): PINClientsInPIN {
    if (!_cached_decoder_for_PINClientsInPIN) { _cached_decoder_for_PINClientsInPIN = function (el: _Element): PINClientsInPIN {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("PINClientsInPIN contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pINID";
    sequence[1].name = "pINServerID";
    sequence[2].name = "pINClientProfiles";
    sequence[3].name = "pINProfile";
    let pINID!: PINID;
    let pINServerID!: PINServerID;
    let pINClientProfiles!: PINClientProfile[];
    let pINProfile!: XMLType;
    pINID = $._decode_implicit<PINID>(() => _decode_PINID)(sequence[0]);
    pINServerID = $._decode_implicit<PINServerID>(() => _decode_PINServerID)(sequence[1]);
    pINClientProfiles = $._decode_implicit<PINClientProfile[]>(() => $._decodeSequenceOf<PINClientProfile>(() => _decode_PINClientProfile))(sequence[2]);
    pINProfile = $._decode_implicit<XMLType>(() => _decode_XMLType)(sequence[3]);
    return new PINClientsInPIN(
        pINID,
        pINServerID,
        pINClientProfiles,
        pINProfile,

    );
}; }
    return _cached_decoder_for_PINClientsInPIN(el);
}

let _cached_encoder_for_PINClientsInPIN: $.ASN1Encoder<PINClientsInPIN> | null = null;

/**
 * @summary Encodes a(n) PINClientsInPIN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINClientsInPIN, encoded as an ASN.1 Element.
 */
export
function _encode_PINClientsInPIN (value: PINClientsInPIN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINClientsInPIN) { _cached_encoder_for_PINClientsInPIN = function (value: PINClientsInPIN, elGetter: $.ASN1Encoder<PINClientsInPIN>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PINID, $.BER)(value.pINID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PINServerID, $.BER)(value.pINServerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<PINClientProfile>(() => _encode_PINClientProfile, $.BER), $.BER)(value.pINClientProfiles, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_XMLType, $.BER)(value.pINProfile, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PINClientsInPIN(value, elGetter);
}


/* eslint-enable */
