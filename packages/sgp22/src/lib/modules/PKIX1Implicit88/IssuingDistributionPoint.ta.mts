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
import { DistributionPointName, _decode_DistributionPointName, _encode_DistributionPointName } from "../PKIX1Implicit88/DistributionPointName.ta.mjs";
// export { DistributionPointName, _decode_DistributionPointName, _encode_DistributionPointName } from "../PKIX1Implicit88/DistributionPointName.ta.mjs";
import { ReasonFlags, ReasonFlags_unused /* IMPORTED_LONG_NAMED_BIT */, unused /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_keyCompromise /* IMPORTED_LONG_NAMED_BIT */, keyCompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cACompromise /* IMPORTED_LONG_NAMED_BIT */, cACompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_affiliationChanged /* IMPORTED_LONG_NAMED_BIT */, affiliationChanged /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_superseded /* IMPORTED_LONG_NAMED_BIT */, superseded /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cessationOfOperation /* IMPORTED_LONG_NAMED_BIT */, cessationOfOperation /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_certificateHold /* IMPORTED_LONG_NAMED_BIT */, certificateHold /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_privilegeWithdrawn /* IMPORTED_LONG_NAMED_BIT */, privilegeWithdrawn /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_aACompromise /* IMPORTED_LONG_NAMED_BIT */, aACompromise /* IMPORTED_SHORT_NAMED_BIT */, _decode_ReasonFlags, _encode_ReasonFlags } from "../PKIX1Implicit88/ReasonFlags.ta.mjs";
// export { ReasonFlags, ReasonFlags_unused /* IMPORTED_LONG_NAMED_BIT */, unused /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_keyCompromise /* IMPORTED_LONG_NAMED_BIT */, keyCompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cACompromise /* IMPORTED_LONG_NAMED_BIT */, cACompromise /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_affiliationChanged /* IMPORTED_LONG_NAMED_BIT */, affiliationChanged /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_superseded /* IMPORTED_LONG_NAMED_BIT */, superseded /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_cessationOfOperation /* IMPORTED_LONG_NAMED_BIT */, cessationOfOperation /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_certificateHold /* IMPORTED_LONG_NAMED_BIT */, certificateHold /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_privilegeWithdrawn /* IMPORTED_LONG_NAMED_BIT */, privilegeWithdrawn /* IMPORTED_SHORT_NAMED_BIT */, ReasonFlags_aACompromise /* IMPORTED_LONG_NAMED_BIT */, aACompromise /* IMPORTED_SHORT_NAMED_BIT */, _decode_ReasonFlags, _encode_ReasonFlags } from "../PKIX1Implicit88/ReasonFlags.ta.mjs";


/**
 * @summary IssuingDistributionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IssuingDistributionPoint ::= SEQUENCE {
 *      distributionPoint          [0] DistributionPointName OPTIONAL,
 *      onlyContainsUserCerts      [1] BOOLEAN DEFAULT FALSE,
 *      onlyContainsCACerts        [2] BOOLEAN DEFAULT FALSE,
 *      onlySomeReasons            [3] ReasonFlags OPTIONAL,
 *      indirectCRL                [4] BOOLEAN DEFAULT FALSE,
 *      onlyContainsAttributeCerts [5] BOOLEAN DEFAULT FALSE }
 * ```
 * 
 * @class
 */
export
class IssuingDistributionPoint {
    constructor (
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContainsUserCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsUserCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsCACerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsCACerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `indirectCRL`.
         * @public
         * @readonly
         */
        readonly indirectCRL: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsAttributeCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsAttributeCerts: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a IssuingDistributionPoint
     * @description
     * 
     * This takes an `object` and converts it to a `IssuingDistributionPoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuingDistributionPoint`.
     * @returns {IssuingDistributionPoint}
     */
    public static _from_object (_o: { [_K in keyof (IssuingDistributionPoint)]: (IssuingDistributionPoint)[_K] }): IssuingDistributionPoint {
        return new IssuingDistributionPoint(_o.distributionPoint, _o.onlyContainsUserCerts, _o.onlyContainsCACerts, _o.onlySomeReasons, _o.indirectCRL, _o.onlyContainsAttributeCerts);
    }

    /**
     * @summary Getter that returns the default value for `onlyContainsUserCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsUserCerts () { return false; }
    /**
     * @summary Getter that returns the default value for `onlyContainsCACerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsCACerts () { return false; }
    /**
     * @summary Getter that returns the default value for `indirectCRL`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_indirectCRL () { return false; }
    /**
     * @summary Getter that returns the default value for `onlyContainsAttributeCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsAttributeCerts () { return false; }
}

/**
 * @summary The Leading Root Component Types of IssuingDistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IssuingDistributionPoint: $.ComponentSpec[] = [
    new $.ComponentSpec("distributionPoint", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("onlyContainsUserCerts", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("onlyContainsCACerts", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("onlySomeReasons", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("indirectCRL", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("onlyContainsAttributeCerts", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IssuingDistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IssuingDistributionPoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IssuingDistributionPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IssuingDistributionPoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IssuingDistributionPoint: $.ASN1Decoder<IssuingDistributionPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IssuingDistributionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IssuingDistributionPoint (el: _Element): IssuingDistributionPoint {
    if (!_cached_decoder_for_IssuingDistributionPoint) { _cached_decoder_for_IssuingDistributionPoint = function (el: _Element): IssuingDistributionPoint {
    let distributionPoint: OPTIONAL<DistributionPointName>;
    let onlyContainsUserCerts: OPTIONAL<BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsUserCerts;
    let onlyContainsCACerts: OPTIONAL<BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsCACerts;
    let onlySomeReasons: OPTIONAL<ReasonFlags>;
    let indirectCRL: OPTIONAL<BOOLEAN> = IssuingDistributionPoint._default_value_for_indirectCRL;
    let onlyContainsAttributeCerts: OPTIONAL<BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsAttributeCerts;
    const callbacks: $.DecodingMap = {
        "distributionPoint": (_el: _Element): void => { distributionPoint = $._decode_explicit<DistributionPointName>(() => _decode_DistributionPointName)(_el); },
        "onlyContainsUserCerts": (_el: _Element): void => { onlyContainsUserCerts = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "onlyContainsCACerts": (_el: _Element): void => { onlyContainsCACerts = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "onlySomeReasons": (_el: _Element): void => { onlySomeReasons = $._decode_implicit<ReasonFlags>(() => _decode_ReasonFlags)(_el); },
        "indirectCRL": (_el: _Element): void => { indirectCRL = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "onlyContainsAttributeCerts": (_el: _Element): void => { onlyContainsAttributeCerts = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IssuingDistributionPoint,
        _extension_additions_list_spec_for_IssuingDistributionPoint,
        _root_component_type_list_2_spec_for_IssuingDistributionPoint,
        undefined,
    );
    return new IssuingDistributionPoint(
        distributionPoint,
        onlyContainsUserCerts,
        onlyContainsCACerts,
        onlySomeReasons,
        indirectCRL,
        onlyContainsAttributeCerts
    );
}; }
    return _cached_decoder_for_IssuingDistributionPoint(el);
}

let _cached_encoder_for_IssuingDistributionPoint: $.ASN1Encoder<IssuingDistributionPoint> | null = null;

/**
 * @summary Encodes a(n) IssuingDistributionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuingDistributionPoint, encoded as an ASN.1 Element.
 */
export
function _encode_IssuingDistributionPoint (value: IssuingDistributionPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IssuingDistributionPoint) { _cached_encoder_for_IssuingDistributionPoint = function (value: IssuingDistributionPoint, elGetter: $.ASN1Encoder<IssuingDistributionPoint>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.distributionPoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DistributionPointName, $.BER)(value.distributionPoint, $.BER)),
            /* IF_DEFAULT */ (value.onlyContainsUserCerts === undefined || $.deepEq(value.onlyContainsUserCerts, IssuingDistributionPoint._default_value_for_onlyContainsUserCerts) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.onlyContainsUserCerts, $.BER)),
            /* IF_DEFAULT */ (value.onlyContainsCACerts === undefined || $.deepEq(value.onlyContainsCACerts, IssuingDistributionPoint._default_value_for_onlyContainsCACerts) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.onlyContainsCACerts, $.BER)),
            /* IF_ABSENT  */ ((value.onlySomeReasons === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ReasonFlags, $.BER)(value.onlySomeReasons, $.BER)),
            /* IF_DEFAULT */ (value.indirectCRL === undefined || $.deepEq(value.indirectCRL, IssuingDistributionPoint._default_value_for_indirectCRL) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.indirectCRL, $.BER)),
            /* IF_DEFAULT */ (value.onlyContainsAttributeCerts === undefined || $.deepEq(value.onlyContainsAttributeCerts, IssuingDistributionPoint._default_value_for_onlyContainsAttributeCerts) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.onlyContainsAttributeCerts, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IssuingDistributionPoint(value, elGetter);
}


/* eslint-enable */
