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
import { FiveGProSeAuthorizationIndicator, _enum_for_FiveGProSeAuthorizationIndicator, FiveGProSeAuthorizationIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGProSeAuthorizationIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGProSeAuthorizationIndicator, _encode_FiveGProSeAuthorizationIndicator } from "../TS33128Payloads/FiveGProSeAuthorizationIndicator.ta.mjs";
// export { FiveGProSeAuthorizationIndicator, _enum_for_FiveGProSeAuthorizationIndicator, FiveGProSeAuthorizationIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGProSeAuthorizationIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGProSeAuthorizationIndicator, _encode_FiveGProSeAuthorizationIndicator } from "../TS33128Payloads/FiveGProSeAuthorizationIndicator.ta.mjs";


/**
 * @summary FiveGProSeAuthorizationIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndication ::= SEQUENCE
 * {
 *     fiveGProSeDirectDiscovery     [1] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeDirectCommunication [2] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL2UEToNetworkRelay  [3] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL3UEToNetworkRelay  [4] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL2RemoteUE          [5] FiveGProSeAuthorizationIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FiveGProSeAuthorizationIndication {
    constructor (
        /**
         * @summary `fiveGProSeDirectDiscovery`.
         * @public
         * @readonly
         */
        readonly fiveGProSeDirectDiscovery: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        /**
         * @summary `fiveGProSeDirectCommunication`.
         * @public
         * @readonly
         */
        readonly fiveGProSeDirectCommunication: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        /**
         * @summary `fiveGProSeL2UEToNetworkRelay`.
         * @public
         * @readonly
         */
        readonly fiveGProSeL2UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        /**
         * @summary `fiveGProSeL3UEToNetworkRelay`.
         * @public
         * @readonly
         */
        readonly fiveGProSeL3UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        /**
         * @summary `fiveGProSeL2RemoteUE`.
         * @public
         * @readonly
         */
        readonly fiveGProSeL2RemoteUE: OPTIONAL<FiveGProSeAuthorizationIndicator>
    ) {}

    /**
     * @summary Restructures an object into a FiveGProSeAuthorizationIndication
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGProSeAuthorizationIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGProSeAuthorizationIndication`.
     * @returns {FiveGProSeAuthorizationIndication}
     */
    public static _from_object (_o: { [_K in keyof (FiveGProSeAuthorizationIndication)]: (FiveGProSeAuthorizationIndication)[_K] }): FiveGProSeAuthorizationIndication {
        return new FiveGProSeAuthorizationIndication(_o.fiveGProSeDirectDiscovery, _o.fiveGProSeDirectCommunication, _o.fiveGProSeL2UEToNetworkRelay, _o.fiveGProSeL3UEToNetworkRelay, _o.fiveGProSeL2RemoteUE);
    }

        /**
         * @summary The enum used as the type of the component `fiveGProSeDirectDiscovery`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeDirectDiscovery = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeDirectCommunication`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeDirectCommunication = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL2UEToNetworkRelay`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL2UEToNetworkRelay = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL3UEToNetworkRelay`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL3UEToNetworkRelay = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL2RemoteUE`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL2RemoteUE = _enum_for_FiveGProSeAuthorizationIndicator;
}

/**
 * @summary The Leading Root Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGProSeDirectDiscovery", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGProSeDirectCommunication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGProSeL2UEToNetworkRelay", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGProSeL3UEToNetworkRelay", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("fiveGProSeL2RemoteUE", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGProSeAuthorizationIndication: $.ASN1Decoder<FiveGProSeAuthorizationIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGProSeAuthorizationIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGProSeAuthorizationIndication (el: _Element): FiveGProSeAuthorizationIndication {
    if (!_cached_decoder_for_FiveGProSeAuthorizationIndication) { _cached_decoder_for_FiveGProSeAuthorizationIndication = function (el: _Element): FiveGProSeAuthorizationIndication {
    let fiveGProSeDirectDiscovery: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeDirectCommunication: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL2UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL3UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL2RemoteUE: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    const callbacks: $.DecodingMap = {
        "fiveGProSeDirectDiscovery": (_el: _Element): void => { fiveGProSeDirectDiscovery = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeDirectCommunication": (_el: _Element): void => { fiveGProSeDirectCommunication = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL2UEToNetworkRelay": (_el: _Element): void => { fiveGProSeL2UEToNetworkRelay = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL3UEToNetworkRelay": (_el: _Element): void => { fiveGProSeL3UEToNetworkRelay = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL2RemoteUE": (_el: _Element): void => { fiveGProSeL2RemoteUE = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGProSeAuthorizationIndication,
        _extension_additions_list_spec_for_FiveGProSeAuthorizationIndication,
        _root_component_type_list_2_spec_for_FiveGProSeAuthorizationIndication,
        undefined,
    );
    return new FiveGProSeAuthorizationIndication(
        fiveGProSeDirectDiscovery,
        fiveGProSeDirectCommunication,
        fiveGProSeL2UEToNetworkRelay,
        fiveGProSeL3UEToNetworkRelay,
        fiveGProSeL2RemoteUE
    );
}; }
    return _cached_decoder_for_FiveGProSeAuthorizationIndication(el);
}

let _cached_encoder_for_FiveGProSeAuthorizationIndication: $.ASN1Encoder<FiveGProSeAuthorizationIndication> | null = null;

/**
 * @summary Encodes a(n) FiveGProSeAuthorizationIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGProSeAuthorizationIndication, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGProSeAuthorizationIndication (value: FiveGProSeAuthorizationIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGProSeAuthorizationIndication) { _cached_encoder_for_FiveGProSeAuthorizationIndication = function (value: FiveGProSeAuthorizationIndication, elGetter: $.ASN1Encoder<FiveGProSeAuthorizationIndication>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.fiveGProSeDirectDiscovery === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeDirectDiscovery, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGProSeDirectCommunication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeDirectCommunication, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGProSeL2UEToNetworkRelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL2UEToNetworkRelay, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGProSeL3UEToNetworkRelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL3UEToNetworkRelay, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGProSeL2RemoteUE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL2RemoteUE, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGProSeAuthorizationIndication(value, elGetter);
}


/* eslint-enable */
