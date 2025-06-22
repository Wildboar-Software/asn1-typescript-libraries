/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta.mjs";
import { TrustedAuth, _decode_TrustedAuth, _encode_TrustedAuth } from "../SASL-9798-3-1997/TrustedAuth.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";


/**
 * @summary TokenBA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenBA1 ::= SEQUENCE {
 *     randomB   RandomNumber,
 *     entityB   [0] GeneralNames OPTIONAL,
 *     certPref  [1] SEQUENCE SIZE (1..MAX) OF TrustedAuth OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class TokenBA1 {
    constructor (
        /**
         * @summary `randomB`.
         * @public
         * @readonly
         */
        readonly randomB: RandomNumber,
        /**
         * @summary `entityB`.
         * @public
         * @readonly
         */
        readonly entityB: OPTIONAL<GeneralNames>,
        /**
         * @summary `certPref`.
         * @public
         * @readonly
         */
        readonly certPref: OPTIONAL<TrustedAuth[]>
    ) {}

    /**
     * @summary Restructures an object into a TokenBA1
     * @description
     *
     * This takes an `object` and converts it to a `TokenBA1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenBA1`.
     * @returns {TokenBA1}
     */
    public static _from_object (_o: { [_K in keyof (TokenBA1)]: (TokenBA1)[_K] }): TokenBA1 {
        return new TokenBA1(_o.randomB, _o.entityB, _o.certPref);
    }


}


/**
 * @summary The Leading Root Component Types of TokenBA1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TokenBA1: $.ComponentSpec[] = [
    new $.ComponentSpec("randomB", false, $.hasTag(_TagClass.universal, 4)),
    /* FIXME: entityB COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("certPref", true, $.hasTag(_TagClass.context, 1))
];


/**
 * @summary The Trailing Root Component Types of TokenBA1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TokenBA1: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of TokenBA1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TokenBA1: $.ComponentSpec[] = [

];


let _cached_decoder_for_TokenBA1: $.ASN1Decoder<TokenBA1> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TokenBA1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenBA1} The decoded data structure.
 */
export
function _decode_TokenBA1 (el: _Element) {
    if (!_cached_decoder_for_TokenBA1) { _cached_decoder_for_TokenBA1 = function (el: _Element): TokenBA1 {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let randomB!: RandomNumber;
    let entityB: OPTIONAL<GeneralNames>;
    let certPref: OPTIONAL<TrustedAuth[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "randomB": (_el: _Element): void => { randomB = _decode_RandomNumber(_el); },
        "entityB": (_el: _Element): void => { entityB = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "certPref": (_el: _Element): void => { certPref = $._decode_implicit<TrustedAuth[]>(() => $._decodeSequenceOf<TrustedAuth>(() => _decode_TrustedAuth))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TokenBA1,
        _extension_additions_list_spec_for_TokenBA1,
        _root_component_type_list_2_spec_for_TokenBA1,
        undefined,
    );
    return new TokenBA1( /* SEQUENCE_CONSTRUCTOR_CALL */
        randomB,
        entityB,
        certPref
    );
}; }
    return _cached_decoder_for_TokenBA1(el);
}


let _cached_encoder_for_TokenBA1: $.ASN1Encoder<TokenBA1> | null = null;


/**
 * @summary Encodes a(n) TokenBA1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenBA1, encoded as an ASN.1 Element.
 */
export
function _encode_TokenBA1 (value: TokenBA1, elGetter: $.ASN1Encoder<TokenBA1>) {
    if (!_cached_encoder_for_TokenBA1) { _cached_encoder_for_TokenBA1 = function (value: TokenBA1): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomB, $.BER),
            /* IF_ABSENT  */ ((value.entityB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER)(value.entityB, $.BER)),
            /* IF_ABSENT  */ ((value.certPref === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TrustedAuth>(() => _encode_TrustedAuth, $.BER), $.BER)(value.certPref, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TokenBA1(value, elGetter);
}


/* eslint-enable */
