/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Information ::= SEQUENCE
 * {
 *     trafficClass            [0] OCTET STRING OPTIONAL,
 *     flowLabel               [1] OCTET STRING (SIZE (20)) OPTIONAL,
 *     payloadLength           [2] OCTET STRING (SIZE (4)) OPTIONAL,
 *     nextHeader              [3] OCTET STRING OPTIONAL,
 *     hopLimit                [4] OCTET STRING OPTIONAL,
 *     source                  [5] OCTET STRING (SIZE (16)),
 *     destination             [6] OCTET STRING (SIZE (16))
 * }
 * ```
 * 
 * @class
 */
export
class IPv6Information {
    constructor (
        /**
         * @summary `trafficClass`.
         * @public
         * @readonly
         */
        readonly trafficClass: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `flowLabel`.
         * @public
         * @readonly
         */
        readonly flowLabel: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `payloadLength`.
         * @public
         * @readonly
         */
        readonly payloadLength: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nextHeader`.
         * @public
         * @readonly
         */
        readonly nextHeader: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `hopLimit`.
         * @public
         * @readonly
         */
        readonly hopLimit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `source`.
         * @public
         * @readonly
         */
        readonly source: OCTET_STRING,
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a IPv6Information
     * @description
     * 
     * This takes an `object` and converts it to a `IPv6Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPv6Information`.
     * @returns {IPv6Information}
     */
    public static _from_object (_o: { [_K in keyof (IPv6Information)]: (IPv6Information)[_K] }): IPv6Information {
        return new IPv6Information(_o.trafficClass, _o.flowLabel, _o.payloadLength, _o.nextHeader, _o.hopLimit, _o.source, _o.destination);
    }


}

/**
 * @summary The Leading Root Component Types of IPv6Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPv6Information: $.ComponentSpec[] = [
    new $.ComponentSpec("trafficClass", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("flowLabel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payloadLength", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nextHeader", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("hopLimit", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("source", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of IPv6Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPv6Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPv6Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPv6Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPv6Information: $.ASN1Decoder<IPv6Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv6Information (el: _Element): IPv6Information {
    if (!_cached_decoder_for_IPv6Information) { _cached_decoder_for_IPv6Information = function (el: _Element): IPv6Information {
    let trafficClass: OPTIONAL<OCTET_STRING>;
    let flowLabel: OPTIONAL<OCTET_STRING>;
    let payloadLength: OPTIONAL<OCTET_STRING>;
    let nextHeader: OPTIONAL<OCTET_STRING>;
    let hopLimit: OPTIONAL<OCTET_STRING>;
    let source!: OCTET_STRING;
    let destination!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "trafficClass": (_el: _Element): void => { trafficClass = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "flowLabel": (_el: _Element): void => { flowLabel = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "payloadLength": (_el: _Element): void => { payloadLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nextHeader": (_el: _Element): void => { nextHeader = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hopLimit": (_el: _Element): void => { hopLimit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "source": (_el: _Element): void => { source = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPv6Information,
        _extension_additions_list_spec_for_IPv6Information,
        _root_component_type_list_2_spec_for_IPv6Information,
        undefined,
    );
    return new IPv6Information(
        trafficClass,
        flowLabel,
        payloadLength,
        nextHeader,
        hopLimit,
        source,
        destination
    );
}; }
    return _cached_decoder_for_IPv6Information(el);
}

let _cached_encoder_for_IPv6Information: $.ASN1Encoder<IPv6Information> | null = null;

/**
 * @summary Encodes a(n) IPv6Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6Information, encoded as an ASN.1 Element.
 */
export
function _encode_IPv6Information (value: IPv6Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv6Information) { _cached_encoder_for_IPv6Information = function (value: IPv6Information, elGetter: $.ASN1Encoder<IPv6Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.trafficClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.trafficClass, $.BER)),
            /* IF_ABSENT  */ ((value.flowLabel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.flowLabel, $.BER)),
            /* IF_ABSENT  */ ((value.payloadLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payloadLength, $.BER)),
            /* IF_ABSENT  */ ((value.nextHeader === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.nextHeader, $.BER)),
            /* IF_ABSENT  */ ((value.hopLimit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.hopLimit, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.source, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.destination, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPv6Information(value, elGetter);
}


/* eslint-enable */
