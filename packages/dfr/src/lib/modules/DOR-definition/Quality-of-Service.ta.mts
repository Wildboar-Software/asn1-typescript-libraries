/* eslint-disable */
import {
    OPTIONAL,
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
import { QoS_level, _decode_QoS_level, _encode_QoS_level } from "../DOR-definition/QoS-level.ta.mjs";
import { Single_use_of_reference, _decode_Single_use_of_reference, _encode_Single_use_of_reference } from "../DOR-definition/Single-use-of-reference.ta.mjs";


/**
 * @summary Quality_of_Service
 * @description
 *
 * QoS attached to a produced DOR and returned in CommonUpdateResult.
 * `referent-modified` uses produce-time from the qos-level of reference
 * content. ISO/IEC 10166-1:1991 §8.1.5, §8.3.5. Details: ISO/IEC 10031-2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality-of-Service ::= SEQUENCE {
 *   qoS-level           [0]  QoS-level DEFAULT level-1:NULL,
 *   usage-of-reference  Single-use-of-reference DEFAULT TRUE
 * }
 * ```
 * 
 * @class
 */
export
class Quality_of_Service {
    constructor (
        /**
         * @summary `qoS_level`.
         * @public
         * @readonly
         */
        readonly qoS_level: OPTIONAL<QoS_level>,
        /**
         * @summary `usage_of_reference`.
         * @public
         * @readonly
         */
        readonly usage_of_reference: OPTIONAL<Single_use_of_reference>
    ) {}

    /**
     * @summary Restructures an object into a Quality_of_Service
     * @description
     * 
     * This takes an `object` and converts it to a `Quality_of_Service`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Quality_of_Service`.
     * @returns {Quality_of_Service}
     */
    public static _from_object (_o: { [_K in keyof (Quality_of_Service)]: (Quality_of_Service)[_K] }): Quality_of_Service {
        return new Quality_of_Service(_o.qoS_level, _o.usage_of_reference);
    }

    /**
     * @summary Getter that returns the default value for `qoS_level`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_qoS_level (): QoS_level { return { level_1: null }; }
    /**
     * @summary Getter that returns the default value for `usage_of_reference`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_usage_of_reference () { return true; }
}

/**
 * @summary The Leading Root Component Types of Quality_of_Service
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Quality_of_Service: $.ComponentSpec[] = [
    new $.ComponentSpec("qoS-level", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("usage-of-reference", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of Quality_of_Service
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Quality_of_Service: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Quality_of_Service
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Quality_of_Service: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Quality_of_Service: $.ASN1Decoder<Quality_of_Service> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Quality_of_Service
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Quality_of_Service (el: _Element): Quality_of_Service {
    if (!_cached_decoder_for_Quality_of_Service) { _cached_decoder_for_Quality_of_Service = function (el: _Element): Quality_of_Service {
    let qoS_level: OPTIONAL<QoS_level> = Quality_of_Service._default_value_for_qoS_level;
    let usage_of_reference: OPTIONAL<Single_use_of_reference> = Quality_of_Service._default_value_for_usage_of_reference;
    const callbacks: $.DecodingMap = {
        "qoS-level": (_el: _Element): void => { qoS_level = $._decode_explicit<QoS_level>(() => _decode_QoS_level)(_el); },
        "usage-of-reference": (_el: _Element): void => { usage_of_reference = _decode_Single_use_of_reference(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Quality_of_Service,
        _extension_additions_list_spec_for_Quality_of_Service,
        _root_component_type_list_2_spec_for_Quality_of_Service,
        undefined,
    );
    return new Quality_of_Service(
        qoS_level,
        usage_of_reference
    );
}; }
    return _cached_decoder_for_Quality_of_Service(el);
}

let _cached_encoder_for_Quality_of_Service: $.ASN1Encoder<Quality_of_Service> | null = null;

/**
 * @summary Encodes a(n) Quality_of_Service into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Quality_of_Service, encoded as an ASN.1 Element.
 */
export
function _encode_Quality_of_Service (value: Quality_of_Service, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Quality_of_Service) { _cached_encoder_for_Quality_of_Service = function (value: Quality_of_Service): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.qoS_level === undefined || $.deepEq(value.qoS_level, Quality_of_Service._default_value_for_qoS_level) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_QoS_level, $.BER)(value.qoS_level, $.BER)),
            /* IF_DEFAULT */ (value.usage_of_reference === undefined || $.deepEq(value.usage_of_reference, Quality_of_Service._default_value_for_usage_of_reference) ? undefined : _encode_Single_use_of_reference(value.usage_of_reference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Quality_of_Service(value, elGetter);
}


/* eslint-enable */
