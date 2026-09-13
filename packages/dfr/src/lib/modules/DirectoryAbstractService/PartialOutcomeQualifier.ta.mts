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
import { LimitProblem, LimitProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, LimitProblem_sizeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, sizeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, LimitProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LimitProblem, _encode_LimitProblem } from "../DirectoryAbstractService/LimitProblem.ta.mjs";
// export { LimitProblem, LimitProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, LimitProblem_sizeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, sizeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, LimitProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LimitProblem, _encode_LimitProblem } from "../DirectoryAbstractService/LimitProblem.ta.mjs";
import { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
// export { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { PartialOutcomeQualifier_entryCount, _decode_PartialOutcomeQualifier_entryCount, _encode_PartialOutcomeQualifier_entryCount } from "../DirectoryAbstractService/PartialOutcomeQualifier-entryCount.ta.mjs";
// export { PartialOutcomeQualifier_entryCount, _decode_PartialOutcomeQualifier_entryCount, _encode_PartialOutcomeQualifier_entryCount } from "../DirectoryAbstractService/PartialOutcomeQualifier-entryCount.ta.mjs";


/**
 * @summary PartialOutcomeQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialOutcomeQualifier ::= SET {
 *   limitProblem                  [0]  LimitProblem OPTIONAL,
 *   unexplored                    [1]  SET SIZE (1..MAX) OF ContinuationReference OPTIONAL,
 *   unavailableCriticalExtensions [2]  BOOLEAN DEFAULT FALSE,
 *   unknownErrors                 [3]  SET SIZE (1..MAX) OF ABSTRACT-SYNTAX.&Type OPTIONAL,
 *   queryReference                [4]  OCTET STRING OPTIONAL,
 *   overspecFilter                [5]  Filter OPTIONAL,
 *   notification                  [6]  SEQUENCE SIZE (1..MAX) OF
 *                                        Attribute{{SupportedAttributes}} OPTIONAL,
 *   entryCount                         CHOICE {
 *     bestEstimate                  [7]  INTEGER,
 *     lowEstimate                   [8]  INTEGER,
 *     exact                         [9]  INTEGER,
 *     ...} OPTIONAL
 *   --                            [10] Not to be used -- }
 * ```
 * 
 * @class
 */
export
class PartialOutcomeQualifier {
    constructor (
        /**
         * @summary `limitProblem`.
         * @public
         * @readonly
         */
        readonly limitProblem: OPTIONAL<LimitProblem>,
        /**
         * @summary `unexplored`.
         * @public
         * @readonly
         */
        readonly unexplored: OPTIONAL<ContinuationReference[]>,
        /**
         * @summary `unavailableCriticalExtensions`.
         * @public
         * @readonly
         */
        readonly unavailableCriticalExtensions: OPTIONAL<BOOLEAN>,
        /**
         * @summary `unknownErrors`.
         * @public
         * @readonly
         */
        readonly unknownErrors: OPTIONAL<_Element[]>,
        /**
         * @summary `queryReference`.
         * @public
         * @readonly
         */
        readonly queryReference: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `overspecFilter`.
         * @public
         * @readonly
         */
        readonly overspecFilter: OPTIONAL<Filter>,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]>,
        /**
         * @summary `entryCount`.
         * @public
         * @readonly
         */
        readonly entryCount: OPTIONAL<PartialOutcomeQualifier_entryCount>
    ) {}

    /**
     * @summary Restructures an object into a PartialOutcomeQualifier
     * @description
     * 
     * This takes an `object` and converts it to a `PartialOutcomeQualifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartialOutcomeQualifier`.
     * @returns {PartialOutcomeQualifier}
     */
    public static _from_object (_o: { [_K in keyof (PartialOutcomeQualifier)]: (PartialOutcomeQualifier)[_K] }): PartialOutcomeQualifier {
        return new PartialOutcomeQualifier(_o.limitProblem, _o.unexplored, _o.unavailableCriticalExtensions, _o.unknownErrors, _o.queryReference, _o.overspecFilter, _o.notification, _o.entryCount);
    }

    /**
     * @summary Getter that returns the default value for `unavailableCriticalExtensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_unavailableCriticalExtensions () { return false; }
}

/**
 * @summary The Leading Root Component Types of PartialOutcomeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartialOutcomeQualifier: $.ComponentSpec[] = [
    new $.ComponentSpec("limitProblem", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("unexplored", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unavailableCriticalExtensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unknownErrors", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("queryReference", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("overspecFilter", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("notification", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("entryCount", true, $.or($.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8), $.hasTag(_TagClass.context, 9)))
];

/**
 * @summary The Trailing Root Component Types of PartialOutcomeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartialOutcomeQualifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartialOutcomeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartialOutcomeQualifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartialOutcomeQualifier: $.ASN1Decoder<PartialOutcomeQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartialOutcomeQualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartialOutcomeQualifier (el: _Element): PartialOutcomeQualifier {
    if (!_cached_decoder_for_PartialOutcomeQualifier) { _cached_decoder_for_PartialOutcomeQualifier = function (el: _Element): PartialOutcomeQualifier {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let limitProblem: OPTIONAL<LimitProblem>;
    let unexplored: OPTIONAL<ContinuationReference[]>;
    let unavailableCriticalExtensions: OPTIONAL<BOOLEAN> = PartialOutcomeQualifier._default_value_for_unavailableCriticalExtensions;
    let unknownErrors: OPTIONAL<_Element[]>;
    let queryReference: OPTIONAL<OCTET_STRING>;
    let overspecFilter: OPTIONAL<Filter>;
    let notification: OPTIONAL<Attribute[]>;
    let entryCount: OPTIONAL<PartialOutcomeQualifier_entryCount>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "limitProblem": (_el: _Element): void => { limitProblem = $._decode_explicit<LimitProblem>(() => _decode_LimitProblem)(_el); },
        "unexplored": (_el: _Element): void => { unexplored = $._decode_explicit<ContinuationReference[]>(() => $._decodeSetOf<ContinuationReference>(() => _decode_ContinuationReference))(_el); },
        "unavailableCriticalExtensions": (_el: _Element): void => { unavailableCriticalExtensions = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "unknownErrors": (_el: _Element): void => { unknownErrors = $._decode_explicit<_Element[]>(() => $._decodeSetOf<_Element>(() => $._decodeAny))(_el); },
        "queryReference": (_el: _Element): void => { queryReference = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "overspecFilter": (_el: _Element): void => { overspecFilter = $._decode_explicit<Filter>(() => _decode_Filter)(_el); },
        "notification": (_el: _Element): void => { notification = $._decode_explicit<Attribute[]>(() => $._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); },
        "entryCount": (_el: _Element): void => { entryCount = _decode_PartialOutcomeQualifier_entryCount(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PartialOutcomeQualifier,
        _extension_additions_list_spec_for_PartialOutcomeQualifier,
        _root_component_type_list_2_spec_for_PartialOutcomeQualifier,
        undefined,
    );
    return new PartialOutcomeQualifier( /* SET_CONSTRUCTOR_CALL */
        limitProblem,
        unexplored,
        unavailableCriticalExtensions,
        unknownErrors,
        queryReference,
        overspecFilter,
        notification,
        entryCount
    );
}; }
    return _cached_decoder_for_PartialOutcomeQualifier(el);
}

let _cached_encoder_for_PartialOutcomeQualifier: $.ASN1Encoder<PartialOutcomeQualifier> | null = null;

/**
 * @summary Encodes a(n) PartialOutcomeQualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialOutcomeQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_PartialOutcomeQualifier (value: PartialOutcomeQualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartialOutcomeQualifier) { _cached_encoder_for_PartialOutcomeQualifier = function (value: PartialOutcomeQualifier, elGetter: $.ASN1Encoder<PartialOutcomeQualifier>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.limitProblem === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_LimitProblem, $.BER)(value.limitProblem, $.BER)),
            /* IF_ABSENT  */ ((value.unexplored === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<ContinuationReference>(() => _encode_ContinuationReference, $.BER), $.BER)(value.unexplored, $.BER)),
            /* IF_DEFAULT */ (value.unavailableCriticalExtensions === undefined || $.deepEq(value.unavailableCriticalExtensions, PartialOutcomeQualifier._default_value_for_unavailableCriticalExtensions) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.unavailableCriticalExtensions, $.BER)),
            /* IF_ABSENT  */ ((value.unknownErrors === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeSetOf<_Element>(() => $._encodeAny, $.BER), $.BER)(value.unknownErrors, $.BER)),
            /* IF_ABSENT  */ ((value.queryReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.queryReference, $.BER)),
            /* IF_ABSENT  */ ((value.overspecFilter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_Filter, $.BER)(value.overspecFilter, $.BER)),
            /* IF_ABSENT  */ ((value.notification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.notification, $.BER)),
            /* IF_ABSENT  */ ((value.entryCount === undefined) ? undefined : _encode_PartialOutcomeQualifier_entryCount(value.entryCount, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PartialOutcomeQualifier(value, elGetter);
}


/* eslint-enable */
