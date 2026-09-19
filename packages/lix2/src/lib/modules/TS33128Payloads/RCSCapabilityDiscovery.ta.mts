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
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary RCSCapabilityDiscovery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSCapabilityDiscovery ::= SEQUENCE
 * {
 *     rCSTargetIdentities           [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     rCSTargetContactIdentities    [2] SEQUENCE SIZE (1..MAX) OF RCSIdentity OPTIONAL,
 *     sIPMessage                    [3] IMSPayload,
 *     direction                     [4] Direction,
 *     location                      [5] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSCapabilityDiscovery {
    constructor (
        /**
         * @summary `rCSTargetIdentities`.
         * @public
         * @readonly
         */
        readonly rCSTargetIdentities: RCSIdentity[],
        /**
         * @summary `rCSTargetContactIdentities`.
         * @public
         * @readonly
         */
        readonly rCSTargetContactIdentities: OPTIONAL<RCSIdentity[]>,
        /**
         * @summary `sIPMessage`.
         * @public
         * @readonly
         */
        readonly sIPMessage: IMSPayload,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: Direction,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a RCSCapabilityDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `RCSCapabilityDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSCapabilityDiscovery`.
     * @returns {RCSCapabilityDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (RCSCapabilityDiscovery)]: (RCSCapabilityDiscovery)[_K] }): RCSCapabilityDiscovery {
        return new RCSCapabilityDiscovery(_o.rCSTargetIdentities, _o.rCSTargetContactIdentities, _o.sIPMessage, _o.direction, _o.location);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of RCSCapabilityDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSCapabilityDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rCSTargetContactIdentities", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sIPMessage", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of RCSCapabilityDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSCapabilityDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSCapabilityDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSCapabilityDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSCapabilityDiscovery: $.ASN1Decoder<RCSCapabilityDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSCapabilityDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSCapabilityDiscovery (el: _Element): RCSCapabilityDiscovery {
    if (!_cached_decoder_for_RCSCapabilityDiscovery) { _cached_decoder_for_RCSCapabilityDiscovery = function (el: _Element): RCSCapabilityDiscovery {
    let rCSTargetIdentities!: RCSIdentity[];
    let rCSTargetContactIdentities: OPTIONAL<RCSIdentity[]>;
    let sIPMessage!: IMSPayload;
    let direction!: Direction;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "rCSTargetContactIdentities": (_el: _Element): void => { rCSTargetContactIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "sIPMessage": (_el: _Element): void => { sIPMessage = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSCapabilityDiscovery,
        _extension_additions_list_spec_for_RCSCapabilityDiscovery,
        _root_component_type_list_2_spec_for_RCSCapabilityDiscovery,
        undefined,
    );
    return new RCSCapabilityDiscovery(
        rCSTargetIdentities,
        rCSTargetContactIdentities,
        sIPMessage,
        direction,
        location
    );
}; }
    return _cached_decoder_for_RCSCapabilityDiscovery(el);
}

let _cached_encoder_for_RCSCapabilityDiscovery: $.ASN1Encoder<RCSCapabilityDiscovery> | null = null;

/**
 * @summary Encodes a(n) RCSCapabilityDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSCapabilityDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_RCSCapabilityDiscovery (value: RCSCapabilityDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSCapabilityDiscovery) { _cached_encoder_for_RCSCapabilityDiscovery = function (value: RCSCapabilityDiscovery, elGetter: $.ASN1Encoder<RCSCapabilityDiscovery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER),
            /* IF_ABSENT  */ ((value.rCSTargetContactIdentities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetContactIdentities, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_IMSPayload, $.BER)(value.sIPMessage, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Direction, $.BER)(value.direction, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSCapabilityDiscovery(value, elGetter);
}


/* eslint-enable */
