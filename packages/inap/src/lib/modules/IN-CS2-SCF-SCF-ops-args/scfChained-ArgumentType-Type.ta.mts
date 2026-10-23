/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingArgument, _decode_ChainingArgument, _encode_ChainingArgument } from "../IN-CS2-SCF-SCF-ops-args/ChainingArgument.ta.mjs";
// export { ChainingArgument, _decode_ChainingArgument, _encode_ChainingArgument } from "../IN-CS2-SCF-SCF-ops-args/ChainingArgument.ta.mjs";


/**
 * @summary scfChained_ArgumentType_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfChained-ArgumentType-Type ::=
 * SEQUENCE {
 *   chainedArgument ChainingArgument,
 *   argument [0] operation.&ArgumentType OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class scfChained_ArgumentType_Type<ArgumentType> {
    /**
     * @summary `chainedArgument`.
     * @public
     * @readonly
     */
    readonly chainedArgument: ChainingArgument;
    /**
     * @summary `argument`.
     * @public
     * @readonly
     */
    readonly argument: OPTIONAL<ArgumentType>;

    constructor (
        chainedArgument: ChainingArgument,
        argument?: OPTIONAL<ArgumentType>
    ) {
        this.chainedArgument = chainedArgument;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a scfChained_ArgumentType_Type
     * @description
     *
     * This takes an `object` and converts it to a `scfChained_ArgumentType_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `scfChained_ArgumentType_Type`.
     * @returns {scfChained_ArgumentType_Type}
     */
    public static _from_object <ArgumentType> (_o: { [_K in keyof (scfChained_ArgumentType_Type<ArgumentType>)]: (scfChained_ArgumentType_Type<ArgumentType>)[_K] }): scfChained_ArgumentType_Type<ArgumentType> {
        return new scfChained_ArgumentType_Type(_o.chainedArgument, _o.argument);
    }


}

/**
 * @summary The Leading Root Component Types of scfChained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("chainedArgument", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argument", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of scfChained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of scfChained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [

];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) scfChained_ArgumentType_Type
 * @function
 * @param _decode_ArgumentType Decodes `operation.&ArgumentType`.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_scfChained_ArgumentType_Type<ArgumentType>(
    _decode_ArgumentType: $.ASN1Decoder<ArgumentType>
): $.ASN1Decoder<scfChained_ArgumentType_Type<ArgumentType>> {
    return function (el: _Element): scfChained_ArgumentType_Type<ArgumentType> {
        let chainedArgument!: ChainingArgument;
        let argument: OPTIONAL<ArgumentType>;
        const callbacks: $.DecodingMap = {
            "chainedArgument": (_el: _Element): void => { chainedArgument = _decode_ChainingArgument(_el); },
            "argument": (_el: _Element): void => { argument = $._decode_explicit<ArgumentType>(() => _decode_ArgumentType)(_el); }
        };
        $._parse_sequence(el, callbacks,
            _root_component_type_list_1_spec_for_scfChained_ArgumentType_Type,
            _extension_additions_list_spec_for_scfChained_ArgumentType_Type,
            _root_component_type_list_2_spec_for_scfChained_ArgumentType_Type,
            undefined,
        );
        return new scfChained_ArgumentType_Type(
            chainedArgument,
            argument
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) scfChained_ArgumentType_Type into an ASN.1 Element.
 * @function
 * @param _encode_ArgumentType Encodes `operation.&ArgumentType`.
 * @returns A function that will encode a(n) scfChained_ArgumentType_Type as an ASN.1 element.
 */
export function _get_encoder_for_scfChained_ArgumentType_Type<ArgumentType>(
    _encode_ArgumentType: $.ASN1Encoder<ArgumentType>
): $.ASN1Encoder<scfChained_ArgumentType_Type<ArgumentType>> {
    return function (value: scfChained_ArgumentType_Type<ArgumentType>): _Element {
        const _components: _Element[] = [
            /* REQUIRED   */ _encode_ChainingArgument(value.chainedArgument, $.BER),
        ];
        if (value.argument !== undefined) {
            _components.push(
                /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_ArgumentType, $.BER)(value.argument, $.BER)
            );
        }
        return $._encodeSequence(_components, $.BER);
    };
}


/* eslint-enable */
