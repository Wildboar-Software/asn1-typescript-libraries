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
import { Result3, _decode_Result3, _encode_Result3 } from "../G/Result3.ta.mjs";
// export { Result3, _decode_Result3, _encode_Result3 } from "../G/Result3.ta.mjs";
import { ImplementationIdent, _decode_ImplementationIdent, _encode_ImplementationIdent } from "../G/ImplementationIdent.ta.mjs";
// export { ImplementationIdent, _decode_ImplementationIdent, _encode_ImplementationIdent } from "../G/ImplementationIdent.ta.mjs";
import { ProtocolVersion, ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */, version1 /* IMPORTED_SHORT_NAMED_BIT */, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../G/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */, version1 /* IMPORTED_SHORT_NAMED_BIT */, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../G/ProtocolVersion.ta.mjs";
import { ProfileArgumValueList, _decode_ProfileArgumValueList, _encode_ProfileArgumValueList } from "../G/ProfileArgumValueList.ta.mjs";
// export { ProfileArgumValueList, _decode_ProfileArgumValueList, _encode_ProfileArgumValueList } from "../G/ProfileArgumValueList.ta.mjs";
import { FunctionalUnits, FunctionalUnits_profileSwitch /* IMPORTED_LONG_NAMED_BIT */, profileSwitch /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_multipleIntNeg /* IMPORTED_LONG_NAMED_BIT */, multipleIntNeg /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_negotiatedRelease /* IMPORTED_LONG_NAMED_BIT */, negotiatedRelease /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_urgentData /* IMPORTED_LONG_NAMED_BIT */, urgentData /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_destructiveBreak /* IMPORTED_LONG_NAMED_BIT */, destructiveBreak /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_enhancedAccess /* IMPORTED_LONG_NAMED_BIT */, enhancedAccess /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_structuredCOs /* IMPORTED_LONG_NAMED_BIT */, structuredCOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_blocks /* IMPORTED_LONG_NAMED_BIT */, blocks /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_fields /* IMPORTED_LONG_NAMED_BIT */, fields /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_referenceInfOs /* IMPORTED_LONG_NAMED_BIT */, referenceInfOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_ripple /* IMPORTED_LONG_NAMED_BIT */, ripple /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_exceptions /* IMPORTED_LONG_NAMED_BIT */, exceptions /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_contextRetention /* IMPORTED_LONG_NAMED_BIT */, contextRetention /* IMPORTED_SHORT_NAMED_BIT */, _decode_FunctionalUnits, _encode_FunctionalUnits } from "../G/FunctionalUnits.ta.mjs";
// export { FunctionalUnits, FunctionalUnits_profileSwitch /* IMPORTED_LONG_NAMED_BIT */, profileSwitch /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_multipleIntNeg /* IMPORTED_LONG_NAMED_BIT */, multipleIntNeg /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_negotiatedRelease /* IMPORTED_LONG_NAMED_BIT */, negotiatedRelease /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_urgentData /* IMPORTED_LONG_NAMED_BIT */, urgentData /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_destructiveBreak /* IMPORTED_LONG_NAMED_BIT */, destructiveBreak /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_enhancedAccess /* IMPORTED_LONG_NAMED_BIT */, enhancedAccess /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_structuredCOs /* IMPORTED_LONG_NAMED_BIT */, structuredCOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_blocks /* IMPORTED_LONG_NAMED_BIT */, blocks /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_fields /* IMPORTED_LONG_NAMED_BIT */, fields /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_referenceInfOs /* IMPORTED_LONG_NAMED_BIT */, referenceInfOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_ripple /* IMPORTED_LONG_NAMED_BIT */, ripple /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_exceptions /* IMPORTED_LONG_NAMED_BIT */, exceptions /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_contextRetention /* IMPORTED_LONG_NAMED_BIT */, contextRetention /* IMPORTED_SHORT_NAMED_BIT */, _decode_FunctionalUnits, _encode_FunctionalUnits } from "../G/FunctionalUnits.ta.mjs";


/**
 * @summary ASRcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRcontent ::= SEQUENCE {
 *     result              G.Result3,
 *     implementation      [3] IMPLICIT G.ImplementationIdent OPTIONAL,
 *     protocol-verison    [4] IMPLICIT G.ProtocolVersion DEFAULT G.version1,
 *     profile-arguments   [5] IMPLICIT G.ProfileArgumValueList OPTIONAL,
 *     functional-units    [6] IMPLICIT G.FunctionalUnits OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ASRcontent {
    constructor (
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: G.Result3,
        /**
         * @summary `implementation`.
         * @public
         * @readonly
         */
        readonly implementation: OPTIONAL<G.ImplementationIdent>,
        /**
         * @summary `protocol_verison`.
         * @public
         * @readonly
         */
        readonly protocol_verison: OPTIONAL<G.ProtocolVersion>,
        /**
         * @summary `profile_arguments`.
         * @public
         * @readonly
         */
        readonly profile_arguments: OPTIONAL<G.ProfileArgumValueList>,
        /**
         * @summary `functional_units`.
         * @public
         * @readonly
         */
        readonly functional_units: OPTIONAL<G.FunctionalUnits>
    ) {}

    /**
     * @summary Restructures an object into a ASRcontent
     * @description
     * 
     * This takes an `object` and converts it to a `ASRcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASRcontent`.
     * @returns {ASRcontent}
     */
    public static _from_object (_o: { [_K in keyof (ASRcontent)]: (ASRcontent)[_K] }): ASRcontent {
        return new ASRcontent(_o.result, _o.implementation, _o.protocol_verison, _o.profile_arguments, _o.functional_units);
    }

    /**
     * @summary Getter that returns the default value for `protocol_verison`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_verison () { return G.version1; }
}

/**
 * @summary The Leading Root Component Types of ASRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASRcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("result", false, $.hasAnyTag),
    new $.ComponentSpec("implementation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("protocol-verison", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("profile-arguments", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("functional-units", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ASRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASRcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ASRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ASRcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ASRcontent: $.ASN1Decoder<ASRcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASRcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASRcontent (el: _Element): ASRcontent {
    if (!_cached_decoder_for_ASRcontent) { _cached_decoder_for_ASRcontent = function (el: _Element): ASRcontent {
    let result!: G.Result3;
    let implementation: OPTIONAL<G.ImplementationIdent>;
    let protocol_verison: OPTIONAL<G.ProtocolVersion> = ASRcontent._default_value_for_protocol_verison;
    let profile_arguments: OPTIONAL<G.ProfileArgumValueList>;
    let functional_units: OPTIONAL<G.FunctionalUnits>;
    const callbacks: $.DecodingMap = {
        "result": (_el: _Element): void => { result = G._decode_Result3(_el); },
        "implementation": (_el: _Element): void => { implementation = $._decode_implicit<G.ImplementationIdent>(() => G._decode_ImplementationIdent)(_el); },
        "protocol-verison": (_el: _Element): void => { protocol_verison = $._decode_implicit<G.ProtocolVersion>(() => G._decode_ProtocolVersion)(_el); },
        "profile-arguments": (_el: _Element): void => { profile_arguments = $._decode_implicit<G.ProfileArgumValueList>(() => G._decode_ProfileArgumValueList)(_el); },
        "functional-units": (_el: _Element): void => { functional_units = $._decode_implicit<G.FunctionalUnits>(() => G._decode_FunctionalUnits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ASRcontent,
        _extension_additions_list_spec_for_ASRcontent,
        _root_component_type_list_2_spec_for_ASRcontent,
        undefined,
    );
    return new ASRcontent(
        result,
        implementation,
        protocol_verison,
        profile_arguments,
        functional_units
    );
}; }
    return _cached_decoder_for_ASRcontent(el);
}

let _cached_encoder_for_ASRcontent: $.ASN1Encoder<ASRcontent> | null = null;

/**
 * @summary Encodes a(n) ASRcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASRcontent, encoded as an ASN.1 Element.
 */
export
function _encode_ASRcontent (value: ASRcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASRcontent) { _cached_encoder_for_ASRcontent = function (value: ASRcontent, elGetter: $.ASN1Encoder<ASRcontent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ G._encode_Result3(value.result, $.BER),
            /* IF_ABSENT  */ ((value.implementation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => G._encode_ImplementationIdent, $.BER)(value.implementation, $.BER)),
            /* IF_DEFAULT */ (value.protocol_verison === undefined || $.deepEq(value.protocol_verison, ASRcontent._default_value_for_protocol_verison) ? undefined : $._encode_implicit(_TagClass.context, 4, () => G._encode_ProtocolVersion, $.BER)(value.protocol_verison, $.BER)),
            /* IF_ABSENT  */ ((value.profile_arguments === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => G._encode_ProfileArgumValueList, $.BER)(value.profile_arguments, $.BER)),
            /* IF_ABSENT  */ ((value.functional_units === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => G._encode_FunctionalUnits, $.BER)(value.functional_units, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ASRcontent(value, elGetter);
}


/* eslint-enable */
