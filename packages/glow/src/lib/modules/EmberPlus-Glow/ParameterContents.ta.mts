/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
import { Value, _decode_Value, _encode_Value } from "../EmberPlus-Glow/Value.ta.mjs";
// export { Value, _decode_Value, _encode_Value } from "../EmberPlus-Glow/Value.ta.mjs";
import { MinMax, _decode_MinMax, _encode_MinMax } from "../EmberPlus-Glow/MinMax.ta.mjs";
// export { MinMax, _decode_MinMax, _encode_MinMax } from "../EmberPlus-Glow/MinMax.ta.mjs";
import { ParameterAccess, _decode_ParameterAccess, _encode_ParameterAccess } from "../EmberPlus-Glow/ParameterAccess.ta.mjs";
// export { ParameterAccess, ParameterAccess_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterAccess_read /* IMPORTED_LONG_NAMED_INTEGER */, read /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterAccess_write /* IMPORTED_LONG_NAMED_INTEGER */, write /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterAccess_readWrite /* IMPORTED_LONG_NAMED_INTEGER */, readWrite /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterAccess, _encode_ParameterAccess } from "../EmberPlus-Glow/ParameterAccess.ta.mjs";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { ParameterType, _decode_ParameterType, _encode_ParameterType } from "../EmberPlus-Glow/ParameterType.ta.mjs";
// export { ParameterType, ParameterType_null /* IMPORTED_LONG_NAMED_INTEGER */, null_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_integer /* IMPORTED_LONG_NAMED_INTEGER */, integer /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_real /* IMPORTED_LONG_NAMED_INTEGER */, real /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_boolean /* IMPORTED_LONG_NAMED_INTEGER */, boolean_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_trigger /* IMPORTED_LONG_NAMED_INTEGER */, trigger /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_enum /* IMPORTED_LONG_NAMED_INTEGER */, enum_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_octets /* IMPORTED_LONG_NAMED_INTEGER */, octets /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterType, _encode_ParameterType } from "../EmberPlus-Glow/ParameterType.ta.mjs";
import { StringIntegerCollection, _decode_StringIntegerCollection, _encode_StringIntegerCollection } from "../EmberPlus-Glow/StringIntegerCollection.ta.mjs";
// export { StringIntegerCollection, _decode_StringIntegerCollection, _encode_StringIntegerCollection } from "../EmberPlus-Glow/StringIntegerCollection.ta.mjs";
import { StreamDescription, _decode_StreamDescription, _encode_StreamDescription } from "../EmberPlus-Glow/StreamDescription.ta.mjs";
// export { StreamDescription, _decode_StreamDescription, _encode_StreamDescription } from "../EmberPlus-Glow/StreamDescription.ta.mjs";


/**
 * @summary ParameterContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterContents ::= SET {
 *         identifier       [ 0] EmberString             OPTIONAL,
 *         description      [ 1] EmberString             OPTIONAL,
 *         value            [ 2] Value                   OPTIONAL,
 *         minimum          [ 3] MinMax                  OPTIONAL,
 *         maximum          [ 4] MinMax                  OPTIONAL,
 *         access           [ 5] ParameterAccess         OPTIONAL,
 *         format           [ 6] EmberString             OPTIONAL,
 *         enumeration      [ 7] EmberString             OPTIONAL,
 *         factor           [ 8] Integer32               OPTIONAL,
 *         isOnline         [ 9] BOOLEAN                 OPTIONAL,
 *         formula          [10] EmberString             OPTIONAL,
 *         step             [11] Integer32               OPTIONAL,
 *         default          [12] Value                   OPTIONAL,
 *         type             [13] ParameterType           OPTIONAL,
 *         streamIdentifier [14] Integer32               OPTIONAL,
 *         enumMap          [15] StringIntegerCollection OPTIONAL,
 *         streamDescriptor [16] StreamDescription       OPTIONAL,
 *         schemaIdentifiers[17] EmberString             OPTIONAL,
 *         templateReference[18] RELATIVE-OID            OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ParameterContents {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OPTIONAL<EmberString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<EmberString>,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<Value>,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<MinMax>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<MinMax>,
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<ParameterAccess>,
        /**
         * @summary `format`.
         * @public
         * @readonly
         */
        readonly format: OPTIONAL<EmberString>,
        /**
         * @summary `enumeration`.
         * @public
         * @readonly
         */
        readonly enumeration: OPTIONAL<EmberString>,
        /**
         * @summary `factor`.
         * @public
         * @readonly
         */
        readonly factor: OPTIONAL<Integer32>,
        /**
         * @summary `isOnline`.
         * @public
         * @readonly
         */
        readonly isOnline: OPTIONAL<BOOLEAN>,
        /**
         * @summary `formula`.
         * @public
         * @readonly
         */
        readonly formula: OPTIONAL<EmberString>,
        /**
         * @summary `step`.
         * @public
         * @readonly
         */
        readonly step: OPTIONAL<Integer32>,
        /**
         * @summary `default_`.
         * @public
         * @readonly
         */
        readonly default_: OPTIONAL<Value>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<ParameterType>,
        /**
         * @summary `streamIdentifier`.
         * @public
         * @readonly
         */
        readonly streamIdentifier: OPTIONAL<Integer32>,
        /**
         * @summary `enumMap`.
         * @public
         * @readonly
         */
        readonly enumMap: OPTIONAL<StringIntegerCollection>,
        /**
         * @summary `streamDescriptor`.
         * @public
         * @readonly
         */
        readonly streamDescriptor: OPTIONAL<StreamDescription>,
        /**
         * @summary `schemaIdentifiers`.
         * @public
         * @readonly
         */
        readonly schemaIdentifiers: OPTIONAL<EmberString>,
        /**
         * @summary `templateReference`.
         * @public
         * @readonly
         */
        readonly templateReference: OPTIONAL<RELATIVE_OID>
    ) {}

    /**
     * @summary Restructures an object into a ParameterContents
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterContents`.
     * @returns {ParameterContents}
     */
    public static _from_object (_o: { [_K in keyof (ParameterContents)]: (ParameterContents)[_K] }): ParameterContents {
        return new ParameterContents(_o.identifier, _o.description, _o.value, _o.minimum, _o.maximum, _o.access, _o.format, _o.enumeration, _o.factor, _o.isOnline, _o.formula, _o.step, _o.default_, _o.type_, _o.streamIdentifier, _o.enumMap, _o.streamDescriptor, _o.schemaIdentifiers, _o.templateReference);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterContents: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("minimum", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("maximum", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("access", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("format", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("enumeration", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("factor", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("isOnline", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("formula", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("step", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("default", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("streamIdentifier", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("enumMap", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("streamDescriptor", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("schemaIdentifiers", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("templateReference", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of ParameterContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterContents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterContents: $.ASN1Decoder<ParameterContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterContents (el: _Element): ParameterContents {
    if (!_cached_decoder_for_ParameterContents) { _cached_decoder_for_ParameterContents = function (el: _Element): ParameterContents {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let identifier: OPTIONAL<EmberString>;
    let description: OPTIONAL<EmberString>;
    let value: OPTIONAL<Value>;
    let minimum: OPTIONAL<MinMax>;
    let maximum: OPTIONAL<MinMax>;
    let access: OPTIONAL<ParameterAccess>;
    let format: OPTIONAL<EmberString>;
    let enumeration: OPTIONAL<EmberString>;
    let factor: OPTIONAL<Integer32>;
    let isOnline: OPTIONAL<BOOLEAN>;
    let formula: OPTIONAL<EmberString>;
    let step: OPTIONAL<Integer32>;
    let default_: OPTIONAL<Value>;
    let type_: OPTIONAL<ParameterType>;
    let streamIdentifier: OPTIONAL<Integer32>;
    let enumMap: OPTIONAL<StringIntegerCollection>;
    let streamDescriptor: OPTIONAL<StreamDescription>;
    let schemaIdentifiers: OPTIONAL<EmberString>;
    let templateReference: OPTIONAL<RELATIVE_OID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "value": (_el: _Element): void => { value = $._decode_explicit<Value>(() => _decode_Value)(_el); },
        "minimum": (_el: _Element): void => { minimum = $._decode_explicit<MinMax>(() => _decode_MinMax)(_el); },
        "maximum": (_el: _Element): void => { maximum = $._decode_explicit<MinMax>(() => _decode_MinMax)(_el); },
        "access": (_el: _Element): void => { access = $._decode_explicit<ParameterAccess>(() => _decode_ParameterAccess)(_el); },
        "format": (_el: _Element): void => { format = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "enumeration": (_el: _Element): void => { enumeration = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "factor": (_el: _Element): void => { factor = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "isOnline": (_el: _Element): void => { isOnline = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "formula": (_el: _Element): void => { formula = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "step": (_el: _Element): void => { step = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "default": (_el: _Element): void => { default_ = $._decode_explicit<Value>(() => _decode_Value)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_explicit<ParameterType>(() => _decode_ParameterType)(_el); },
        "streamIdentifier": (_el: _Element): void => { streamIdentifier = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "enumMap": (_el: _Element): void => { enumMap = $._decode_explicit<StringIntegerCollection>(() => _decode_StringIntegerCollection)(_el); },
        "streamDescriptor": (_el: _Element): void => { streamDescriptor = $._decode_explicit<StreamDescription>(() => _decode_StreamDescription)(_el); },
        "schemaIdentifiers": (_el: _Element): void => { schemaIdentifiers = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "templateReference": (_el: _Element): void => { templateReference = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterContents,
        _extension_additions_list_spec_for_ParameterContents,
        _root_component_type_list_2_spec_for_ParameterContents,
        undefined,
    );
    return new ParameterContents( /* SET_CONSTRUCTOR_CALL */
        identifier,
        description,
        value,
        minimum,
        maximum,
        access,
        format,
        enumeration,
        factor,
        isOnline,
        formula,
        step,
        default_,
        type_,
        streamIdentifier,
        enumMap,
        streamDescriptor,
        schemaIdentifiers,
        templateReference
    );
}; }
    return _cached_decoder_for_ParameterContents(el);
}

let _cached_encoder_for_ParameterContents: $.ASN1Encoder<ParameterContents> | null = null;

/**
 * @summary Encodes a(n) ParameterContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterContents, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterContents (value: ParameterContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterContents) { _cached_encoder_for_ParameterContents = function (value: ParameterContents, elGetter: $.ASN1Encoder<ParameterContents>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_EmberString, $.BER)(value.identifier, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.value === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Value, $.BER)(value.value, $.BER)),
            /* IF_ABSENT  */ ((value.minimum === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_MinMax, $.BER)(value.minimum, $.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_MinMax, $.BER)(value.maximum, $.BER)),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ParameterAccess, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.format === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_EmberString, $.BER)(value.format, $.BER)),
            /* IF_ABSENT  */ ((value.enumeration === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_EmberString, $.BER)(value.enumeration, $.BER)),
            /* IF_ABSENT  */ ((value.factor === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_Integer32, $.BER)(value.factor, $.BER)),
            /* IF_ABSENT  */ ((value.isOnline === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.isOnline, $.BER)),
            /* IF_ABSENT  */ ((value.formula === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_EmberString, $.BER)(value.formula, $.BER)),
            /* IF_ABSENT  */ ((value.step === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => _encode_Integer32, $.BER)(value.step, $.BER)),
            /* IF_ABSENT  */ ((value.default_ === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_Value, $.BER)(value.default_, $.BER)),
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_explicit(_TagClass.context, 13, () => _encode_ParameterType, $.BER)(value.type_, $.BER)),
            /* IF_ABSENT  */ ((value.streamIdentifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_Integer32, $.BER)(value.streamIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.enumMap === undefined) ? undefined : $._encode_explicit(_TagClass.context, 15, () => _encode_StringIntegerCollection, $.BER)(value.enumMap, $.BER)),
            /* IF_ABSENT  */ ((value.streamDescriptor === undefined) ? undefined : $._encode_explicit(_TagClass.context, 16, () => _encode_StreamDescription, $.BER)(value.streamDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.schemaIdentifiers === undefined) ? undefined : $._encode_explicit(_TagClass.context, 17, () => _encode_EmberString, $.BER)(value.schemaIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.templateReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 18, () => $._encodeRelativeOID, $.BER)(value.templateReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterContents(value, elGetter);
}


/* eslint-enable */
