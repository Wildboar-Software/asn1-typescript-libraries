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
import { RAND, _decode_RAND, _encode_RAND } from "../MAP-MS-DataTypes/RAND.ta.mjs";
import { XRES, _decode_XRES, _encode_XRES } from "../MAP-MS-DataTypes/XRES.ta.mjs";
import { AUTN, _decode_AUTN, _encode_AUTN } from "../MAP-MS-DataTypes/AUTN.ta.mjs";
import { KASME, _decode_KASME, _encode_KASME } from "../MAP-MS-DataTypes/KASME.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary EPC_AV
 * @description
 *
 * One EPS authentication vector (Rand, Xres, Autn, KASME). If the requesting
 * node type is MME, the HSS shall return EPS authentication vectors. If the HSS
 * cannot provide EPS AVs, an empty MAP_SEND_AUTHENTICATION_INFO response is
 * returned (3GPP TS 29.002 V19.1.0 clauses 8.5.2.1, 7.6.7.5D and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPC-AV ::= SEQUENCE {
 *     rand    RAND,
 *     xres    XRES,
 *     autn    AUTN,
 *     kasme    KASME,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class EPC_AV {
    constructor (
        /**
         * @summary `rand`.
         * @description
         *
         * Random number used for authentication (3GPP TS 29.002 V19.1.0 clause
         * 7.6.7.2).
         *
         * @public
         * @readonly
         */
        readonly rand: RAND,
        /**
         * @summary `xres`.
         * @description
         *
         * Expected response to the authentication request (3GPP TS 29.002
         * V19.1.0 clause 7.6.7.5).
         *
         * @public
         * @readonly
         */
        readonly xres: XRES,
        /**
         * @summary `autn`.
         * @description
         *
         * Authentication Token (3GPP TS 29.002 V19.1.0 clause 7.6.7.5C).
         *
         * @public
         * @readonly
         */
        readonly autn: AUTN,
        /**
         * @summary `kasme`.
         * @description
         *
         * Key for the Access Security Management Entity (3GPP TS 29.002 V19.1.0
         * clause 7.6.7.5D).
         *
         * @public
         * @readonly
         */
        readonly kasme: KASME,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EPC_AV
     * @description
     * 
     * This takes an `object` and converts it to a `EPC_AV`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPC_AV`.
     * @returns {EPC_AV}
     */
    public static _from_object (_o: { [_K in keyof (EPC_AV)]: (EPC_AV)[_K] }): EPC_AV {
        return new EPC_AV(_o.rand, _o.xres, _o.autn, _o.kasme, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPC_AV
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPC_AV: $.ComponentSpec[] = [
    new $.ComponentSpec("rand", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("xres", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("autn", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("kasme", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of EPC_AV
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPC_AV: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPC_AV
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPC_AV: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPC_AV: $.ASN1Decoder<EPC_AV> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPC_AV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPC_AV (el: _Element): EPC_AV {
    if (!_cached_decoder_for_EPC_AV) { _cached_decoder_for_EPC_AV = function (el: _Element): EPC_AV {
    let rand!: RAND;
    let xres!: XRES;
    let autn!: AUTN;
    let kasme!: KASME;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rand": (_el: _Element): void => { rand = _decode_RAND(_el); },
        "xres": (_el: _Element): void => { xres = _decode_XRES(_el); },
        "autn": (_el: _Element): void => { autn = _decode_AUTN(_el); },
        "kasme": (_el: _Element): void => { kasme = _decode_KASME(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPC_AV,
        _extension_additions_list_spec_for_EPC_AV,
        _root_component_type_list_2_spec_for_EPC_AV,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPC_AV(
        rand,
        xres,
        autn,
        kasme,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPC_AV(el);
}

let _cached_encoder_for_EPC_AV: $.ASN1Encoder<EPC_AV> | null = null;

/**
 * @summary Encodes a(n) EPC_AV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPC_AV, encoded as an ASN.1 Element.
 */
export
function _encode_EPC_AV (value: EPC_AV, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPC_AV) { _cached_encoder_for_EPC_AV = function (value: EPC_AV, elGetter: $.ASN1Encoder<EPC_AV>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RAND(value.rand, $.BER),
            /* REQUIRED   */ _encode_XRES(value.xres, $.BER),
            /* REQUIRED   */ _encode_AUTN(value.autn, $.BER),
            /* REQUIRED   */ _encode_KASME(value.kasme, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPC_AV(value, elGetter);
}


/* eslint-enable */
