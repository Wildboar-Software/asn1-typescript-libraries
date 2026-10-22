/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-SCF-SDF-Classes/SupportedMethods.osa.mjs";
import { ExecuteResult_Type_output_assertions_Item, _decode_ExecuteResult_Type_output_assertions_Item, _encode_ExecuteResult_Type_output_assertions_Item } from "../IN-SCF-SDF-operations/ExecuteResult-Type-output-assertions-Item.ta.mjs";
// export { ExecuteResult_Type_output_assertions_Item, _decode_ExecuteResult_Type_output_assertions_Item, _encode_ExecuteResult_Type_output_assertions_Item } from "../IN-SCF-SDF-operations/ExecuteResult-Type-output-assertions-Item.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary ExecuteResult_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteResult-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ExecuteResult_Type {
    /**
     * @summary `method_id`.
     * @public
     * @readonly
     */
    readonly method_id: OBJECT_IDENTIFIER;
    /**
     * @summary `output_assertions`.
     * @public
     * @readonly
     */
    readonly output_assertions: OPTIONAL<ExecuteResult_Type_output_assertions_Item[]>;
    /**
     * @summary `specific_output`.
     * @public
     * @readonly
     */
    readonly specific_output: OPTIONAL<_Element>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */;
    /**
     * @summary `performer`.
     * @public
     * @readonly
     */
    readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */;
    /**
     * @summary `aliasDereferenced`.
     * @public
     * @readonly
     */
    readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */;
    /**
     * @summary `notification`.
     * @public
     * @readonly
     */
    readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */;

    constructor (
        method_id: OBJECT_IDENTIFIER,
        output_assertions: OPTIONAL<ExecuteResult_Type_output_assertions_Item[]>,
        specific_output: OPTIONAL<_Element>,
        securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {
        this.method_id = method_id;
        this.output_assertions = output_assertions;
        this.specific_output = specific_output;
        this.securityParameters = securityParameters;
        this.performer = performer;
        this.aliasDereferenced = aliasDereferenced;
        this.notification = notification;
    }

    /**
     * @summary Restructures an object into a ExecuteResult_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteResult_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteResult_Type`.
     * @returns {ExecuteResult_Type}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteResult_Type)]: (ExecuteResult_Type)[_K] }): ExecuteResult_Type {
        return new ExecuteResult_Type(_o.method_id, _o.output_assertions, _o.specific_output, _o.securityParameters, _o.performer, _o.aliasDereferenced, _o.notification);
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced () { return false; }
}

/**
 * @summary The Leading Root Component Types of ExecuteResult_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteResult_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("method-id", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("output-assertions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("specific-output", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("performer", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("aliasDereferenced", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("notification", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of ExecuteResult_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteResult_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteResult_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteResult_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteResult_Type: $.ASN1Decoder<ExecuteResult_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteResult_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteResult_Type (el: _Element): ExecuteResult_Type {
    if (!_cached_decoder_for_ExecuteResult_Type) { _cached_decoder_for_ExecuteResult_Type = function (el: _Element): ExecuteResult_Type {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let method_id!: OBJECT_IDENTIFIER;
    let output_assertions: OPTIONAL<ExecuteResult_Type_output_assertions_Item[]>;
    let specific_output: OPTIONAL<_Element>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let performer: OPTIONAL<DistinguishedName>;
    let aliasDereferenced: OPTIONAL<BOOLEAN> = ExecuteResult_Type._default_value_for_aliasDereferenced;
    let notification: OPTIONAL<Attribute[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "method-id": (_el: _Element): void => { method_id = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "output-assertions": (_el: _Element): void => { output_assertions = $._decode_explicit<ExecuteResult_Type_output_assertions_Item[]>(() => $._decodeSequenceOf<ExecuteResult_Type_output_assertions_Item>(() => _decode_ExecuteResult_Type_output_assertions_Item))(_el); },
        "specific-output": (_el: _Element): void => { specific_output = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "performer": (_el: _Element): void => { performer = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "aliasDereferenced": (_el: _Element): void => { aliasDereferenced = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "notification": (_el: _Element): void => { notification = $._decode_explicit<Attribute[]>(() => $._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ExecuteResult_Type,
        _extension_additions_list_spec_for_ExecuteResult_Type,
        _root_component_type_list_2_spec_for_ExecuteResult_Type,
        undefined,
    );
    return new ExecuteResult_Type( /* SET_CONSTRUCTOR_CALL */
        method_id,
        output_assertions,
        specific_output,
        securityParameters,
        performer,
        aliasDereferenced,
        notification
    );
}; }
    return _cached_decoder_for_ExecuteResult_Type(el);
}

let _cached_encoder_for_ExecuteResult_Type: $.ASN1Encoder<ExecuteResult_Type> | null = null;

/**
 * @summary Encodes a(n) ExecuteResult_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteResult_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteResult_Type (value: ExecuteResult_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteResult_Type) { _cached_encoder_for_ExecuteResult_Type = function (value: ExecuteResult_Type, elGetter: $.ASN1Encoder<ExecuteResult_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.method_id, $.BER));
    if (value.output_assertions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExecuteResult_Type_output_assertions_Item>(() => _encode_ExecuteResult_Type_output_assertions_Item, $.BER), $.BER)(value.output_assertions, $.BER));
    }
    if (value.specific_output !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeAny, $.BER)(value.specific_output, $.BER));
    }
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 30, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.performer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_DistinguishedName, $.BER)(value.performer, $.BER));
    }
    if (value.aliasDereferenced !== undefined && !$.deepEq(value.aliasDereferenced, ExecuteResult_Type._default_value_for_aliasDereferenced)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 28, () => $._encodeBoolean, $.BER)(value.aliasDereferenced, $.BER));
    }
    if (value.notification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.notification, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ExecuteResult_Type(value, elGetter);
}


/* eslint-enable */
