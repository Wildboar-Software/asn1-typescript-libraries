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
import { AuthenticationAttribute, _decode_AuthenticationAttribute, _encode_AuthenticationAttribute } from "../DFRAbstractService/AuthenticationAttribute.ta.mjs";
// export { AuthenticationAttribute, _decode_AuthenticationAttribute, _encode_AuthenticationAttribute } from "../DFRAbstractService/AuthenticationAttribute.ta.mjs";
import { ConstraintsType, _decode_ConstraintsType, _encode_ConstraintsType } from "../DFRAbstractService/ConstraintsType.ta.mjs";
// export { ConstraintsType, _decode_ConstraintsType, _encode_ConstraintsType } from "../DFRAbstractService/ConstraintsType.ta.mjs";
import { TypeAndAttribute, _decode_TypeAndAttribute, _encode_TypeAndAttribute } from "../DFRAbstractService/TypeAndAttribute.ta.mjs";
// export { TypeAndAttribute, _decode_TypeAndAttribute, _encode_TypeAndAttribute } from "../DFRAbstractService/TypeAndAttribute.ta.mjs";
import { FunctionSetType, _enum_for_FunctionSetType, FunctionSetType_flat_store /* IMPORTED_LONG_ENUMERATION_ITEM */, flat_store /* IMPORTED_SHORT_ENUMERATION_ITEM */, FunctionSetType_pre_defined_store /* IMPORTED_LONG_ENUMERATION_ITEM */, pre_defined_store /* IMPORTED_SHORT_ENUMERATION_ITEM */, FunctionSetType_full_set /* IMPORTED_LONG_ENUMERATION_ITEM */, full_set /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FunctionSetType, _encode_FunctionSetType } from "../DFRAbstractService/FunctionSetType.ta.mjs";
// export { FunctionSetType, _enum_for_FunctionSetType, FunctionSetType_flat_store /* IMPORTED_LONG_ENUMERATION_ITEM */, flat_store /* IMPORTED_SHORT_ENUMERATION_ITEM */, FunctionSetType_pre_defined_store /* IMPORTED_LONG_ENUMERATION_ITEM */, pre_defined_store /* IMPORTED_SHORT_ENUMERATION_ITEM */, FunctionSetType_full_set /* IMPORTED_LONG_ENUMERATION_ITEM */, full_set /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FunctionSetType, _encode_FunctionSetType } from "../DFRAbstractService/FunctionSetType.ta.mjs";
import { ROAProtocols, _decode_ROAProtocols, _encode_ROAProtocols } from "../DFRAbstractService/ROAProtocols.ta.mjs";
// export { ROAProtocols, _decode_ROAProtocols, _encode_ROAProtocols } from "../DFRAbstractService/ROAProtocols.ta.mjs";


/**
 * @summary DfrBindResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrBindResult ::= SET {
 *     authentication-attributes       [0] SET OF AuthenticationAttribute OPTIONAL,
 *     constraints-supported           [1] ConstraintsType OPTIONAL,
 *     dfr-document-types-supported    [2] SET OF TypeAndAttribute OPTIONAL,
 *     function-Set-supported          [3] FunctionSetType OPTIONAL,
 *     maximum-length-supported        [4] INTEGER OPTIONAL,
 *     dor-for-produce-operations      [5] BOOLEAN DEFAULT TRUE,
 *     dor-for-consume-operations      [6] BOOLEAN DEFAULT TRUE,
 *     rOA-protocols-accessee          [7] ROAProtocols OPTIONAL,
 *     rOA-protocols-accessor          [8] ROAProtocols OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DfrBindResult {
    constructor (
        /**
         * @summary `authentication_attributes`.
         * @public
         * @readonly
         */
        readonly authentication_attributes: OPTIONAL<AuthenticationAttribute[]>,
        /**
         * @summary `constraints_supported`.
         * @public
         * @readonly
         */
        readonly constraints_supported: OPTIONAL<ConstraintsType>,
        /**
         * @summary `dfr_document_types_supported`.
         * @public
         * @readonly
         */
        readonly dfr_document_types_supported: OPTIONAL<TypeAndAttribute[]>,
        /**
         * @summary `function_Set_supported`.
         * @public
         * @readonly
         */
        readonly function_Set_supported: OPTIONAL<FunctionSetType>,
        /**
         * @summary `maximum_length_supported`.
         * @public
         * @readonly
         */
        readonly maximum_length_supported: OPTIONAL<INTEGER>,
        /**
         * @summary `dor_for_produce_operations`.
         * @public
         * @readonly
         */
        readonly dor_for_produce_operations: OPTIONAL<BOOLEAN>,
        /**
         * @summary `dor_for_consume_operations`.
         * @public
         * @readonly
         */
        readonly dor_for_consume_operations: OPTIONAL<BOOLEAN>,
        /**
         * @summary `rOA_protocols_accessee`.
         * @public
         * @readonly
         */
        readonly rOA_protocols_accessee: OPTIONAL<ROAProtocols>,
        /**
         * @summary `rOA_protocols_accessor`.
         * @public
         * @readonly
         */
        readonly rOA_protocols_accessor: OPTIONAL<ROAProtocols>
    ) {}

    /**
     * @summary Restructures an object into a DfrBindResult
     * @description
     * 
     * This takes an `object` and converts it to a `DfrBindResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrBindResult`.
     * @returns {DfrBindResult}
     */
    public static _from_object (_o: { [_K in keyof (DfrBindResult)]: (DfrBindResult)[_K] }): DfrBindResult {
        return new DfrBindResult(_o.authentication_attributes, _o.constraints_supported, _o.dfr_document_types_supported, _o.function_Set_supported, _o.maximum_length_supported, _o.dor_for_produce_operations, _o.dor_for_consume_operations, _o.rOA_protocols_accessee, _o.rOA_protocols_accessor);
    }

    /**
     * @summary Getter that returns the default value for `dor_for_produce_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dor_for_produce_operations () { return true; }
    /**
     * @summary Getter that returns the default value for `dor_for_consume_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dor_for_consume_operations () { return true; }        /**
         * @summary The enum used as the type of the component `function_Set_supported`
         * @public
         * @static
         */

    public static _enum_for_function_Set_supported = _enum_for_FunctionSetType;
}

/**
 * @summary The Leading Root Component Types of DfrBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec("authentication-attributes", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("constraints-supported", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dfr-document-types-supported", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("function-Set-supported", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("maximum-length-supported", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dor-for-produce-operations", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dor-for-consume-operations", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rOA-protocols-accessee", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rOA-protocols-accessor", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of DfrBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrBindResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrBindResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrBindResult: $.ASN1Decoder<DfrBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrBindResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrBindResult (el: _Element): DfrBindResult {
    if (!_cached_decoder_for_DfrBindResult) { _cached_decoder_for_DfrBindResult = function (el: _Element): DfrBindResult {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let authentication_attributes: OPTIONAL<AuthenticationAttribute[]>;
    let constraints_supported: OPTIONAL<ConstraintsType>;
    let dfr_document_types_supported: OPTIONAL<TypeAndAttribute[]>;
    let function_Set_supported: OPTIONAL<FunctionSetType>;
    let maximum_length_supported: OPTIONAL<INTEGER>;
    let dor_for_produce_operations: OPTIONAL<BOOLEAN> = DfrBindResult._default_value_for_dor_for_produce_operations;
    let dor_for_consume_operations: OPTIONAL<BOOLEAN> = DfrBindResult._default_value_for_dor_for_consume_operations;
    let rOA_protocols_accessee: OPTIONAL<ROAProtocols>;
    let rOA_protocols_accessor: OPTIONAL<ROAProtocols>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "authentication-attributes": (_el: _Element): void => { authentication_attributes = $._decode_implicit<AuthenticationAttribute[]>(() => $._decodeSetOf<AuthenticationAttribute>(() => _decode_AuthenticationAttribute))(_el); },
        "constraints-supported": (_el: _Element): void => { constraints_supported = $._decode_implicit<ConstraintsType>(() => _decode_ConstraintsType)(_el); },
        "dfr-document-types-supported": (_el: _Element): void => { dfr_document_types_supported = $._decode_implicit<TypeAndAttribute[]>(() => $._decodeSetOf<TypeAndAttribute>(() => _decode_TypeAndAttribute))(_el); },
        "function-Set-supported": (_el: _Element): void => { function_Set_supported = $._decode_implicit<FunctionSetType>(() => _decode_FunctionSetType)(_el); },
        "maximum-length-supported": (_el: _Element): void => { maximum_length_supported = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dor-for-produce-operations": (_el: _Element): void => { dor_for_produce_operations = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "dor-for-consume-operations": (_el: _Element): void => { dor_for_consume_operations = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "rOA-protocols-accessee": (_el: _Element): void => { rOA_protocols_accessee = $._decode_implicit<ROAProtocols>(() => _decode_ROAProtocols)(_el); },
        "rOA-protocols-accessor": (_el: _Element): void => { rOA_protocols_accessor = $._decode_implicit<ROAProtocols>(() => _decode_ROAProtocols)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_DfrBindResult,
        _extension_additions_list_spec_for_DfrBindResult,
        _root_component_type_list_2_spec_for_DfrBindResult,
        undefined,
    );
    return new DfrBindResult( /* SET_CONSTRUCTOR_CALL */
        authentication_attributes,
        constraints_supported,
        dfr_document_types_supported,
        function_Set_supported,
        maximum_length_supported,
        dor_for_produce_operations,
        dor_for_consume_operations,
        rOA_protocols_accessee,
        rOA_protocols_accessor
    );
}; }
    return _cached_decoder_for_DfrBindResult(el);
}

let _cached_encoder_for_DfrBindResult: $.ASN1Encoder<DfrBindResult> | null = null;

/**
 * @summary Encodes a(n) DfrBindResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrBindResult, encoded as an ASN.1 Element.
 */
export
function _encode_DfrBindResult (value: DfrBindResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrBindResult) { _cached_encoder_for_DfrBindResult = function (value: DfrBindResult, elGetter: $.ASN1Encoder<DfrBindResult>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.authentication_attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<AuthenticationAttribute>(() => _encode_AuthenticationAttribute, $.BER), $.BER)(value.authentication_attributes, $.BER)),
            /* IF_ABSENT  */ ((value.constraints_supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConstraintsType, $.BER)(value.constraints_supported, $.BER)),
            /* IF_ABSENT  */ ((value.dfr_document_types_supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<TypeAndAttribute>(() => _encode_TypeAndAttribute, $.BER), $.BER)(value.dfr_document_types_supported, $.BER)),
            /* IF_ABSENT  */ ((value.function_Set_supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FunctionSetType, $.BER)(value.function_Set_supported, $.BER)),
            /* IF_ABSENT  */ ((value.maximum_length_supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.maximum_length_supported, $.BER)),
            /* IF_DEFAULT */ (value.dor_for_produce_operations === undefined || $.deepEq(value.dor_for_produce_operations, DfrBindResult._default_value_for_dor_for_produce_operations) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.dor_for_produce_operations, $.BER)),
            /* IF_DEFAULT */ (value.dor_for_consume_operations === undefined || $.deepEq(value.dor_for_consume_operations, DfrBindResult._default_value_for_dor_for_consume_operations) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.dor_for_consume_operations, $.BER)),
            /* IF_ABSENT  */ ((value.rOA_protocols_accessee === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ROAProtocols, $.BER)(value.rOA_protocols_accessee, $.BER)),
            /* IF_ABSENT  */ ((value.rOA_protocols_accessor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ROAProtocols, $.BER)(value.rOA_protocols_accessor, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrBindResult(value, elGetter);
}


/* eslint-enable */
