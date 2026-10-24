/* eslint-disable */
import {
    type BIT_STRING,
    type BOOLEAN,
    type INTEGER,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { METHOD } from "../IN-CS3-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-CS3-SCF-SDF-Classes/SupportedMethods.osa.mjs";
import { ExecuteArgument_Type_input_assertions_Item, _decode_ExecuteArgument_Type_input_assertions_Item, _encode_ExecuteArgument_Type_input_assertions_Item } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item.ta.mjs";
// export { ExecuteArgument_Type_input_assertions_Item, _decode_ExecuteArgument_Type_input_assertions_Item, _encode_ExecuteArgument_Type_input_assertions_Item } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
import { ServiceControls, _decode_ServiceControls, _encode_ServiceControls } from "../DirectoryAbstractService/ServiceControls.ta.mjs";
// export { ServiceControls, _decode_ServiceControls, _encode_ServiceControls } from "../DirectoryAbstractService/ServiceControls.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { OperationProgress, _decode_OperationProgress, _encode_OperationProgress } from "../DistributedOperations/OperationProgress.ta.mjs";
// export { OperationProgress, _decode_OperationProgress, _encode_OperationProgress } from "../DistributedOperations/OperationProgress.ta.mjs";
import { type ReferenceType, _decode_ReferenceType, _encode_ReferenceType, _enum_for_ReferenceType } from "../DistributedOperations/ReferenceType.ta.mjs";
// export { ReferenceType, _enum_for_ReferenceType, ReferenceType_superior /* IMPORTED_LONG_ENUMERATION_ITEM */, superior /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_subordinate /* IMPORTED_LONG_ENUMERATION_ITEM */, subordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_cross /* IMPORTED_LONG_ENUMERATION_ITEM */, cross /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_nonSpecificSubordinate /* IMPORTED_LONG_ENUMERATION_ITEM */, nonSpecificSubordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_supplier /* IMPORTED_LONG_ENUMERATION_ITEM */, supplier /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_master /* IMPORTED_LONG_ENUMERATION_ITEM */, master /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_immediateSuperior /* IMPORTED_LONG_ENUMERATION_ITEM */, immediateSuperior /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_self /* IMPORTED_LONG_ENUMERATION_ITEM */, self /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferenceType, _encode_ReferenceType } from "../DistributedOperations/ReferenceType.ta.mjs";
import { type ContextSelection, _decode_ContextSelection, _encode_ContextSelection } from "../DirectoryAbstractService/ContextSelection.ta.mjs";
// export { ContextSelection, _decode_ContextSelection, _encode_ContextSelection } from "../DirectoryAbstractService/ContextSelection.ta.mjs";
import { type FamilyGrouping, FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_FamilyGrouping, _encode_FamilyGrouping, _enum_for_FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
// export { FamilyGrouping, _enum_for_FamilyGrouping, FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, entryOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */, compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_strands /* IMPORTED_LONG_ENUMERATION_ITEM */, strands /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_multiStrand /* IMPORTED_LONG_ENUMERATION_ITEM */, multiStrand /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FamilyGrouping, _encode_FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";


/**
 * @summary ExecuteArgument_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteArgument-Type ::=
 * SET {
 *   object [0] Name,
 *   method-id [1] METHOD.&id({SupportedMethods}),
 *   input-assertions [2] SEQUENCE OF
 *     SEQUENCE {
 *       type METHOD.&InputAttributes.&id({SupportedMethods}{@method-id}),
 *       values SET OF METHOD.&InputAttributes.&Type({SupportedMethods}{@method-id, @.type}) OPTIONAL,
 *       valuesWithContext [0] SET OF METHOD.&InputAttributes.&Type({SupportedMethods}{@method-id, @.type}) OPTIONAL,
 *       contextList [1] SET OF Context
 *     } OPTIONAL,
 *   -- EDITOR: there is no way (at the moment) in ASN.1
 *   -- to reference a component through a SET OF or SEQUENCE OF type.
 *   -- The inner SEQUENCE has been removed for compilation purpose.
 *   -- Align the descriptive text/comments accordingly.
 *   specific-input [3] METHOD.&SpecificInput({SupportedMethods}{@method-id}) OPTIONAL,
 *   COMPONENTS OF CommonArguments
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteArgument_Type {
    /**
     * @summary `object`.
     * @public
     * @readonly
     */
    readonly object: Name;
    /**
     * @summary `method_id`.
     * @public
     * @readonly
     */
    readonly method_id: OBJECT_IDENTIFIER;
    /**
     * @summary `input_assertions`.
     * @public
     * @readonly
     */
    readonly input_assertions: OPTIONAL<ExecuteArgument_Type_input_assertions_Item[]>;
    /**
     * @summary `specific_input`.
     * @public
     * @readonly
     */
    readonly specific_input: OPTIONAL<_Element>;
    /**
     * @summary `serviceControls`.
     * @public
     * @readonly
     */
    readonly serviceControls: OPTIONAL<ServiceControls> /* REPLICATED_COMPONENT */;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */;
    /**
     * @summary `requestor`.
     * @public
     * @readonly
     */
    readonly requestor: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */;
    /**
     * @summary `operationProgress`.
     * @public
     * @readonly
     */
    readonly operationProgress: OPTIONAL<OperationProgress> /* REPLICATED_COMPONENT */;
    /**
     * @summary `aliasedRDNs`.
     * @public
     * @readonly
     */
    readonly aliasedRDNs: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */;
    /**
     * @summary `criticalExtensions`.
     * @public
     * @readonly
     */
    readonly criticalExtensions: OPTIONAL<BIT_STRING> /* REPLICATED_COMPONENT */;
    /**
     * @summary `referenceType`.
     * @public
     * @readonly
     */
    readonly referenceType: OPTIONAL<ReferenceType> /* REPLICATED_COMPONENT */;
    /**
     * @summary `entryOnly`.
     * @public
     * @readonly
     */
    readonly entryOnly: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */;
    /**
     * @summary `nameResolveOnMaste`.
     * @public
     * @readonly
     */
    readonly nameResolveOnMaste: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */;
    /**
     * @summary `operationContexts`.
     * @public
     * @readonly
     */
    readonly operationContexts: OPTIONAL<ContextSelection> /* REPLICATED_COMPONENT */;
    /**
     * @summary `familyGrouping`.
     * @public
     * @readonly
     */
    readonly familyGrouping: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */;

    constructor (
        object: Name,
        method_id: OBJECT_IDENTIFIER,
        input_assertions?: OPTIONAL<ExecuteArgument_Type_input_assertions_Item[]>,
        specific_input?: OPTIONAL<_Element>,
        serviceControls?: OPTIONAL<ServiceControls> /* REPLICATED_COMPONENT */,
        securityParameters?: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        requestor?: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        operationProgress?: OPTIONAL<OperationProgress> /* REPLICATED_COMPONENT */,
        aliasedRDNs?: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        criticalExtensions?: OPTIONAL<BIT_STRING> /* REPLICATED_COMPONENT */,
        referenceType?: OPTIONAL<ReferenceType> /* REPLICATED_COMPONENT */,
        entryOnly?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        nameResolveOnMaste?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        operationContexts?: OPTIONAL<ContextSelection> /* REPLICATED_COMPONENT */,
        familyGrouping?: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */
    ) {
        this.object = object;
        this.method_id = method_id;
        this.input_assertions = input_assertions;
        this.specific_input = specific_input;
        this.serviceControls = serviceControls;
        this.securityParameters = securityParameters;
        this.requestor = requestor;
        this.operationProgress = operationProgress;
        this.aliasedRDNs = aliasedRDNs;
        this.criticalExtensions = criticalExtensions;
        this.referenceType = referenceType;
        this.entryOnly = entryOnly;
        this.nameResolveOnMaste = nameResolveOnMaste;
        this.operationContexts = operationContexts;
        this.familyGrouping = familyGrouping;
    }

    /**
     * @summary Restructures an object into a ExecuteArgument_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteArgument_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteArgument_Type`.
     * @returns {ExecuteArgument_Type}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteArgument_Type)]: (ExecuteArgument_Type)[_K] }): ExecuteArgument_Type {
        return new ExecuteArgument_Type(_o.object, _o.method_id, _o.input_assertions, _o.specific_input, _o.serviceControls, _o.securityParameters, _o.requestor, _o.operationProgress, _o.aliasedRDNs, _o.criticalExtensions, _o.referenceType, _o.entryOnly, _o.nameResolveOnMaste, _o.operationContexts, _o.familyGrouping);
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls () { return ServiceControls._from_object({ _unrecognizedExtensionsList: [] }); }
    /**
     * @summary Getter that returns the default value for `operationProgress`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_operationProgress () { return OperationProgress._from_object({ nameResolutionPhase: OperationProgress._enum_for_nameResolutionPhase.notStarted, _unrecognizedExtensionsList: [] }); }
    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly () { return true; }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaste`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaste () { return false; }
    /**
     * @summary Getter that returns the default value for `familyGrouping`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_familyGrouping () { return FamilyGrouping_entryOnly; }        /**
         * @summary The enum used as the type of the component `referenceType`
         * @public
         * @static
         */

    public static _enum_for_referenceType = _enum_for_ReferenceType;        /**
         * @summary The enum used as the type of the component `familyGrouping`
         * @public
         * @static
         */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;
}

/**
 * @summary The Leading Root Component Types of ExecuteArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteArgument_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("method-id", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("input-assertions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("specific-input", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceControls", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("requestor", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("operationProgress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("aliasedRDNs", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("criticalExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("referenceType", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("entryOnly", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("nameResolveOnMaste", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("operationContexts", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("familyGrouping", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of ExecuteArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteArgument_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteArgument_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteArgument_Type: $.ASN1Decoder<ExecuteArgument_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteArgument_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteArgument_Type (el: _Element): ExecuteArgument_Type {
    if (!_cached_decoder_for_ExecuteArgument_Type) { _cached_decoder_for_ExecuteArgument_Type = function (el: _Element): ExecuteArgument_Type {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let method_id!: OBJECT_IDENTIFIER;
    let input_assertions: OPTIONAL<ExecuteArgument_Type_input_assertions_Item[]>;
    let specific_input: OPTIONAL<_Element>;
    let serviceControls: OPTIONAL<ServiceControls> = ExecuteArgument_Type._default_value_for_serviceControls;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let requestor: OPTIONAL<DistinguishedName>;
    let operationProgress: OPTIONAL<OperationProgress> = ExecuteArgument_Type._default_value_for_operationProgress;
    let aliasedRDNs: OPTIONAL<INTEGER>;
    let criticalExtensions: OPTIONAL<BIT_STRING>;
    let referenceType: OPTIONAL<ReferenceType>;
    let entryOnly: OPTIONAL<BOOLEAN> = ExecuteArgument_Type._default_value_for_entryOnly;
    let nameResolveOnMaste: OPTIONAL<BOOLEAN> = ExecuteArgument_Type._default_value_for_nameResolveOnMaste;
    let operationContexts: OPTIONAL<ContextSelection>;
    let familyGrouping: OPTIONAL<FamilyGrouping> = ExecuteArgument_Type._default_value_for_familyGrouping;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "method-id": (_el: _Element): void => { method_id = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "input-assertions": (_el: _Element): void => { input_assertions = $._decode_explicit<ExecuteArgument_Type_input_assertions_Item[]>(() => $._decodeSequenceOf<ExecuteArgument_Type_input_assertions_Item>(() => _decode_ExecuteArgument_Type_input_assertions_Item))(_el); },
        "specific-input": (_el: _Element): void => { specific_input = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "serviceControls": (_el: _Element): void => { serviceControls = $._decode_explicit<ServiceControls>(() => _decode_ServiceControls)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "requestor": (_el: _Element): void => { requestor = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "operationProgress": (_el: _Element): void => { operationProgress = $._decode_explicit<OperationProgress>(() => _decode_OperationProgress)(_el); },
        "aliasedRDNs": (_el: _Element): void => { aliasedRDNs = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "criticalExtensions": (_el: _Element): void => { criticalExtensions = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "referenceType": (_el: _Element): void => { referenceType = $._decode_explicit<ReferenceType>(() => _decode_ReferenceType)(_el); },
        "entryOnly": (_el: _Element): void => { entryOnly = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "nameResolveOnMaste": (_el: _Element): void => { nameResolveOnMaste = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "operationContexts": (_el: _Element): void => { operationContexts = $._decode_explicit<ContextSelection>(() => _decode_ContextSelection)(_el); },
        "familyGrouping": (_el: _Element): void => { familyGrouping = $._decode_explicit<FamilyGrouping>(() => _decode_FamilyGrouping)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ExecuteArgument_Type,
        _extension_additions_list_spec_for_ExecuteArgument_Type,
        _root_component_type_list_2_spec_for_ExecuteArgument_Type,
        undefined,
    );
    return new ExecuteArgument_Type( /* SET_CONSTRUCTOR_CALL */
        object,
        method_id,
        input_assertions,
        specific_input,
        serviceControls,
        securityParameters,
        requestor,
        operationProgress,
        aliasedRDNs,
        criticalExtensions,
        referenceType,
        entryOnly,
        nameResolveOnMaste,
        operationContexts,
        familyGrouping
    );
}; }
    return _cached_decoder_for_ExecuteArgument_Type(el);
}

let _cached_encoder_for_ExecuteArgument_Type: $.ASN1Encoder<ExecuteArgument_Type> | null = null;

/**
 * @summary Encodes a(n) ExecuteArgument_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteArgument_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteArgument_Type (value: ExecuteArgument_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteArgument_Type) { _cached_encoder_for_ExecuteArgument_Type = function (value: ExecuteArgument_Type, elGetter: $.ASN1Encoder<ExecuteArgument_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.method_id, $.BER));
    if (value.input_assertions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExecuteArgument_Type_input_assertions_Item>(() => _encode_ExecuteArgument_Type_input_assertions_Item, $.BER), $.BER)(value.input_assertions, $.BER));
    }
    if (value.specific_input !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeAny, $.BER)(value.specific_input, $.BER));
    }
    if (value.serviceControls !== undefined && !$.deepEq(value.serviceControls, ExecuteArgument_Type._default_value_for_serviceControls)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 30, () => _encode_ServiceControls, $.BER)(value.serviceControls, $.BER));
    }
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.requestor !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => _encode_DistinguishedName, $.BER)(value.requestor, $.BER));
    }
    if (value.operationProgress !== undefined && !$.deepEq(value.operationProgress, ExecuteArgument_Type._default_value_for_operationProgress)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 27, () => _encode_OperationProgress, $.BER)(value.operationProgress, $.BER));
    }
    if (value.aliasedRDNs !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.aliasedRDNs, $.BER));
    }
    if (value.criticalExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 25, () => $._encodeBitString, $.BER)(value.criticalExtensions, $.BER));
    }
    if (value.referenceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 24, () => _encode_ReferenceType, $.BER)(value.referenceType, $.BER));
    }
    if (value.entryOnly !== undefined && !$.deepEq(value.entryOnly, ExecuteArgument_Type._default_value_for_entryOnly)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.entryOnly, $.BER));
    }
    if (value.nameResolveOnMaste !== undefined && !$.deepEq(value.nameResolveOnMaste, ExecuteArgument_Type._default_value_for_nameResolveOnMaste)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 21, () => $._encodeBoolean, $.BER)(value.nameResolveOnMaste, $.BER));
    }
    if (value.operationContexts !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_ContextSelection, $.BER)(value.operationContexts, $.BER));
    }
    if (value.familyGrouping !== undefined && !$.deepEq(value.familyGrouping, ExecuteArgument_Type._default_value_for_familyGrouping)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 19, () => _encode_FamilyGrouping, $.BER)(value.familyGrouping, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ExecuteArgument_Type(value, elGetter);
}


/* eslint-enable */
