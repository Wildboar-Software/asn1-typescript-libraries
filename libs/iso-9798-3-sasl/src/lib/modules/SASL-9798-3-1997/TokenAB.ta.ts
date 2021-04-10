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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta";
export { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta";
import { CertData, _decode_CertData, _encode_CertData } from "../SASL-9798-3-1997/CertData.ta";
export { CertData, _decode_CertData, _encode_CertData } from "../SASL-9798-3-1997/CertData.ta";
import { SIGNATURE, _decode_SIGNATURE, _encode_SIGNATURE } from "../SASL-9798-3-1997/SIGNATURE.ta";
export { SIGNATURE, _decode_SIGNATURE, _encode_SIGNATURE } from "../SASL-9798-3-1997/SIGNATURE.ta";
import { TBSDataAB, _decode_TBSDataAB, _encode_TBSDataAB } from "../SASL-9798-3-1997/TBSDataAB.ta";
export { TBSDataAB, _decode_TBSDataAB, _encode_TBSDataAB } from "../SASL-9798-3-1997/TBSDataAB.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta";

/* START_OF_SYMBOL_DEFINITION TokenAB */
/**
 * @summary TokenAB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenAB ::= SEQUENCE {
 *     randomA   RandomNumber,
 *     entityB   [0] GeneralNames OPTIONAL,
 *     certA     [1] CertData,
 *     authID    [2] GeneralNames OPTIONAL,
 *     signature SIGNATURE { TBSDataAB }
 * }(CONSTRAINED BY {-- The entityB and authID fields shall be included
 *     -- in TokenAB if and only if they are also included in TBSDataAB.
 *     -- The entityB field SHOULD be present in TokenAB whenever the
 *     -- client believes it knows the identity of the server.--})
 * ```
 *
 * @class
 */
export
class TokenAB {
    constructor (
        /**
         * @summary `randomA`.
         * @public
         * @readonly
         */
        readonly randomA: RandomNumber,
        /**
         * @summary `entityB`.
         * @public
         * @readonly
         */
        readonly entityB: OPTIONAL<GeneralNames>,
        /**
         * @summary `certA`.
         * @public
         * @readonly
         */
        readonly certA: CertData,
        /**
         * @summary `authID`.
         * @public
         * @readonly
         */
        readonly authID: OPTIONAL<GeneralNames>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SIGNATURE,
    ) {}

    /**
     * @summary Restructures an object into a TokenAB
     * @description
     *
     * This takes an `object` and converts it to a `TokenAB`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenAB`.
     * @returns {TokenAB}
     */
    public static _from_object (_o: { [_K in keyof (TokenAB)]: (TokenAB)[_K] }): TokenAB {
        return new TokenAB(_o.randomA, _o.entityB, _o.certA, _o.authID, _o.signature);
    }


}
/* END_OF_SYMBOL_DEFINITION TokenAB */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenAB */
/**
 * @summary The Leading Root Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TokenAB: $.ComponentSpec[] = [
    new $.ComponentSpec("randomA", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    /* FIXME: entityB COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("certA", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    /* FIXME: authID COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenAB */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenAB */
/**
 * @summary The Trailing Root Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TokenAB: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenAB */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenAB */
/**
 * @summary The Extension Addition Component Types of TokenAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TokenAB: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenAB */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenAB */
let _cached_decoder_for_TokenAB: $.ASN1Decoder<TokenAB> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenAB */

/* START_OF_SYMBOL_DEFINITION _decode_TokenAB */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenAB
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenAB} The decoded data structure.
 */
export
function _decode_TokenAB (el: _Element) {
    if (!_cached_decoder_for_TokenAB) { _cached_decoder_for_TokenAB = function (el: _Element): TokenAB {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let randomA!: RandomNumber;
    let entityB: OPTIONAL<GeneralNames>;
    let certA!: CertData;
    let authID: OPTIONAL<GeneralNames>;
    let signature!: SIGNATURE;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "randomA": (_el: _Element): void => { randomA = _decode_RandomNumber(_el); },
        "entityB": (_el: _Element): void => { entityB = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "certA": (_el: _Element): void => { certA = $._decode_explicit<CertData>(() => _decode_CertData)(_el); },
        "authID": (_el: _Element): void => { authID = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "signature": (_el: _Element): void => { signature = _decode_SIGNATURE(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TokenAB,
        _extension_additions_list_spec_for_TokenAB,
        _root_component_type_list_2_spec_for_TokenAB,
        undefined,
    );
    return new TokenAB( /* SEQUENCE_CONSTRUCTOR_CALL */
        randomA,
        entityB,
        certA,
        authID,
        signature
    );
}; }
    return _cached_decoder_for_TokenAB(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenAB */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenAB */
let _cached_encoder_for_TokenAB: $.ASN1Encoder<TokenAB> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenAB */

/* START_OF_SYMBOL_DEFINITION _encode_TokenAB */
/**
 * @summary Encodes a(n) TokenAB into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenAB, encoded as an ASN.1 Element.
 */
export
function _encode_TokenAB (value: TokenAB, elGetter: $.ASN1Encoder<TokenAB>) {
    if (!_cached_encoder_for_TokenAB) { _cached_encoder_for_TokenAB = function (value: TokenAB, elGetter: $.ASN1Encoder<TokenAB>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomA, $.BER),
            /* IF_ABSENT  */ ((value.entityB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER)(value.entityB, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_CertData, $.BER)(value.certA, $.BER),
            /* IF_ABSENT  */ ((value.authID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeneralNames, $.BER)(value.authID, $.BER)),
            /* REQUIRED   */ _encode_SIGNATURE(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TokenAB(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenAB */

/* eslint-enable */
