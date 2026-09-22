/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";
// export { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";
import { InnerContextToken, _decode_InnerContextToken, _encode_InnerContextToken } from "../Spnego/InnerContextToken.ta.mjs";
// export { InnerContextToken, _decode_InnerContextToken, _encode_InnerContextToken } from "../Spnego/InnerContextToken.ta.mjs";


/**
 * @summary InitialContextToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialContextToken ::= -- option indication (delegation, etc.) indicated within
 *     -- mechanism-specific token
 * [APPLICATION 0] IMPLICIT SEQUENCE {
 *     thisMech MechType,
 *     innerContextToken InnerContextToken
 *     --    DEFINED BY thisMech
 *     -- contents mechanism-specific
 *     -- ASN.1 structure not required
 *      }
 * ```
 * 
 * @class
 */
export
class InitialContextToken {
    constructor (
        /**
         * @summary `thisMech`.
         * @public
         * @readonly
         */
        readonly thisMech: MechType,
        /**
         * @summary `innerContextToken`.
         * @public
         * @readonly
         */
        readonly innerContextToken: InnerContextToken
    ) {}

    /**
     * @summary Restructures an object into a InitialContextToken
     * @description
     * 
     * This takes an `object` and converts it to a `InitialContextToken`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialContextToken`.
     * @returns {InitialContextToken}
     */
    public static _from_object (_o: { [_K in keyof (InitialContextToken)]: (InitialContextToken)[_K] }): InitialContextToken {
        return new InitialContextToken(_o.thisMech, _o.innerContextToken);
    }


}

/**
 * @summary The Leading Root Component Types of InitialContextToken
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialContextToken: $.ComponentSpec[] = [
    new $.ComponentSpec("thisMech", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("innerContextToken", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of InitialContextToken
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialContextToken: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialContextToken
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialContextToken: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialContextToken: $.ASN1Decoder<InitialContextToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialContextToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialContextToken (el: _Element): InitialContextToken {
    if (!_cached_decoder_for_InitialContextToken) { _cached_decoder_for_InitialContextToken = $._decode_implicit<InitialContextToken>(() => function (el: _Element): InitialContextToken {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("InitialContextToken contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "thisMech";
    sequence[1].name = "innerContextToken";
    let thisMech!: MechType;
    let innerContextToken!: InnerContextToken;
    thisMech = _decode_MechType(sequence[0]);
    innerContextToken = _decode_InnerContextToken(sequence[1]);
    return new InitialContextToken(
        thisMech,
        innerContextToken,

    );
}); }
    return _cached_decoder_for_InitialContextToken(el);
}

let _cached_encoder_for_InitialContextToken: $.ASN1Encoder<InitialContextToken> | null = null;

/**
 * @summary Encodes a(n) InitialContextToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialContextToken, encoded as an ASN.1 Element.
 */
export
function _encode_InitialContextToken (value: InitialContextToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialContextToken) { _cached_encoder_for_InitialContextToken = $._encode_implicit(_TagClass.application, 0, () => function (value: InitialContextToken, elGetter: $.ASN1Encoder<InitialContextToken>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MechType(value.thisMech, $.BER),
            /* REQUIRED   */ _encode_InnerContextToken(value.innerContextToken, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_InitialContextToken(value, elGetter);
}


/* eslint-enable */
