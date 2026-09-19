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
import { DBName, _decode_DBName, _encode_DBName } from "../Z39-50-OCLC-UserInformation/DBName.ta.mjs";
// export { DBName, _decode_DBName, _encode_DBName } from "../Z39-50-OCLC-UserInformation/DBName.ta.mjs";


/**
 * @summary OCLC_UserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OCLC-UserInformation ::= SEQUENCE {
 *         motd        [1] IMPLICIT VisibleString OPTIONAL, 
 *             dblist      SEQUENCE OF DBName OPTIONAL, 
 *             failReason  [3] IMPLICIT BOOLEAN OPTIONAL,
 *           text        [2] IMPLICIT VisibleString OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class OCLC_UserInformation {
    constructor (
        /**
         * @summary `motd`.
         * @public
         * @readonly
         */
        readonly motd: OPTIONAL<VisibleString>,
        /**
         * @summary `dblist`.
         * @public
         * @readonly
         */
        readonly dblist: OPTIONAL<DBName[]>,
        /**
         * @summary `failReason`.
         * @public
         * @readonly
         */
        readonly failReason: OPTIONAL<BOOLEAN>,
        /**
         * @summary `text`.
         * @public
         * @readonly
         */
        readonly text: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a OCLC_UserInformation
     * @description
     * 
     * This takes an `object` and converts it to a `OCLC_UserInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCLC_UserInformation`.
     * @returns {OCLC_UserInformation}
     */
    public static _from_object (_o: { [_K in keyof (OCLC_UserInformation)]: (OCLC_UserInformation)[_K] }): OCLC_UserInformation {
        return new OCLC_UserInformation(_o.motd, _o.dblist, _o.failReason, _o.text);
    }


}

/**
 * @summary The Leading Root Component Types of OCLC_UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OCLC_UserInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("motd", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dblist", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("failReason", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("text", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of OCLC_UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OCLC_UserInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OCLC_UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OCLC_UserInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OCLC_UserInformation: $.ASN1Decoder<OCLC_UserInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OCLC_UserInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OCLC_UserInformation (el: _Element): OCLC_UserInformation {
    if (!_cached_decoder_for_OCLC_UserInformation) { _cached_decoder_for_OCLC_UserInformation = function (el: _Element): OCLC_UserInformation {
    let motd: OPTIONAL<VisibleString>;
    let dblist: OPTIONAL<DBName[]>;
    let failReason: OPTIONAL<BOOLEAN>;
    let text: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "motd": (_el: _Element): void => { motd = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "dblist": (_el: _Element): void => { dblist = $._decodeSequenceOf<DBName>(() => _decode_DBName)(_el); },
        "failReason": (_el: _Element): void => { failReason = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "text": (_el: _Element): void => { text = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OCLC_UserInformation,
        _extension_additions_list_spec_for_OCLC_UserInformation,
        _root_component_type_list_2_spec_for_OCLC_UserInformation,
        undefined,
    );
    return new OCLC_UserInformation(
        motd,
        dblist,
        failReason,
        text
    );
}; }
    return _cached_decoder_for_OCLC_UserInformation(el);
}

let _cached_encoder_for_OCLC_UserInformation: $.ASN1Encoder<OCLC_UserInformation> | null = null;

/**
 * @summary Encodes a(n) OCLC_UserInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCLC_UserInformation, encoded as an ASN.1 Element.
 */
export
function _encode_OCLC_UserInformation (value: OCLC_UserInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OCLC_UserInformation) { _cached_encoder_for_OCLC_UserInformation = function (value: OCLC_UserInformation, elGetter: $.ASN1Encoder<OCLC_UserInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.motd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.motd, $.BER)),
            /* IF_ABSENT  */ ((value.dblist === undefined) ? undefined : $._encodeSequenceOf<DBName>(() => _encode_DBName, $.BER)(value.dblist, $.BER)),
            /* IF_ABSENT  */ ((value.failReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.failReason, $.BER)),
            /* IF_ABSENT  */ ((value.text === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.text, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OCLC_UserInformation(value, elGetter);
}


/* eslint-enable */
