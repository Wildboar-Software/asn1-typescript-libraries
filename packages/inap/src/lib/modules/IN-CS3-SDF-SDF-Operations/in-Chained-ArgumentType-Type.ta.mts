/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IN_ChainingArguments, _decode_IN_ChainingArguments, _encode_IN_ChainingArguments } from "../IN-CS3-SDF-SDF-Operations/IN-ChainingArguments.ta.mjs";
// export { IN_ChainingArguments, _decode_IN_ChainingArguments, _encode_IN_ChainingArguments } from "../IN-CS3-SDF-SDF-Operations/IN-ChainingArguments.ta.mjs";


/**
 * @summary in_Chained_ArgumentType_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * in-Chained-ArgumentType-Type ::=
 * SET {
 *   in-chainedArgument IN-ChainingArguments,
 *   argument [0] operation.&ArgumentType
 * }
 * ```
 *
 * @class
 */
export
class in_Chained_ArgumentType_Type<ArgumentType> {
    /**
     * @summary `in_chainedArgument`.
     * @public
     * @readonly
     */
    readonly in_chainedArgument: IN_ChainingArguments;
    /**
     * @summary `argument`.
     * @public
     * @readonly
     */
    readonly argument: ArgumentType;

    constructor (
        in_chainedArgument: IN_ChainingArguments,
        argument: ArgumentType
    ) {
        this.in_chainedArgument = in_chainedArgument;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a in_Chained_ArgumentType_Type
     * @description
     *
     * This takes an `object` and converts it to a `in_Chained_ArgumentType_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `in_Chained_ArgumentType_Type`.
     * @returns {in_Chained_ArgumentType_Type}
     */
    public static _from_object <ArgumentType> (_o: { [_K in keyof (in_Chained_ArgumentType_Type<ArgumentType>)]: (in_Chained_ArgumentType_Type<ArgumentType>)[_K] }): in_Chained_ArgumentType_Type<ArgumentType> {
        return new in_Chained_ArgumentType_Type(_o.in_chainedArgument, _o.argument);
    }


}

/**
 * @summary The Leading Root Component Types of in_Chained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("in-chainedArgument", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("argument", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of in_Chained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of in_Chained_ArgumentType_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [

];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) in_Chained_ArgumentType_Type
 * @function
 * @param _decode_ArgumentType Decodes `operation.&ArgumentType`.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_in_Chained_ArgumentType_Type<ArgumentType>(
    _decode_ArgumentType: $.ASN1Decoder<ArgumentType>
): $.ASN1Decoder<in_Chained_ArgumentType_Type<ArgumentType>> {
    return function (el: _Element): in_Chained_ArgumentType_Type<ArgumentType> {
        let in_chainedArgument!: IN_ChainingArguments;
        let argument!: ArgumentType;
        const callbacks: $.DecodingMap = {
            "in-chainedArgument": (_el: _Element): void => { in_chainedArgument = _decode_IN_ChainingArguments(_el); },
            "argument": (_el: _Element): void => { argument = $._decode_explicit<ArgumentType>(() => _decode_ArgumentType)(_el); }
        };
        $._parse_set(el, callbacks,
            _root_component_type_list_1_spec_for_in_Chained_ArgumentType_Type,
            _extension_additions_list_spec_for_in_Chained_ArgumentType_Type,
            _root_component_type_list_2_spec_for_in_Chained_ArgumentType_Type,
            undefined,
        );
        return new in_Chained_ArgumentType_Type(
            in_chainedArgument,
            argument
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) in_Chained_ArgumentType_Type into an ASN.1 Element.
 * @function
 * @param _encode_ArgumentType Encodes `operation.&ArgumentType`.
 * @returns A function that will encode a(n) in_Chained_ArgumentType_Type as an ASN.1 element.
 */
export function _get_encoder_for_in_Chained_ArgumentType_Type<ArgumentType>(
    _encode_ArgumentType: $.ASN1Encoder<ArgumentType>
): $.ASN1Encoder<in_Chained_ArgumentType_Type<ArgumentType>> {
    return function (value: in_Chained_ArgumentType_Type<ArgumentType>): _Element {
        return $._encodeSet([
            /* REQUIRED   */ _encode_IN_ChainingArguments(value.in_chainedArgument, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ArgumentType, $.BER)(value.argument, $.BER)
        ], $.BER);
    };
}


/* eslint-enable */
