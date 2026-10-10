/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv4Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Information ::= SEQUENCE
 * {
 *     headerLength            [0] OCTET STRING OPTIONAL,
 *     typeOfService           [1] OCTET STRING OPTIONAL,
 *     totalLength             [2] OCTET STRING (SIZE (2)) OPTIONAL,
 *     identification          [3] OCTET STRING (SIZE (2)) OPTIONAL,
 *     fragment                [4] OCTET STRING (SIZE (2)) OPTIONAL,
 *     ttl                     [5] OCTET STRING OPTIONAL,
 *     protocol                [6] OCTET STRING OPTIONAL,
 *     headerChecksum          [7] OCTET STRING (SIZE (2)) OPTIONAL,
 *     source                  [8] OCTET STRING (SIZE (4)),
 *     destination             [9] OCTET STRING (SIZE (4)),
 *     options                 [10] OCTET STRING (SIZE (0..40)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IPv4Information {
    constructor (
        /**
         * @summary `headerLength`.
         * @public
         * @readonly
         */
        readonly headerLength: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `typeOfService`.
         * @public
         * @readonly
         */
        readonly typeOfService: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `totalLength`.
         * @public
         * @readonly
         */
        readonly totalLength: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `identification`.
         * @public
         * @readonly
         */
        readonly identification: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `fragment`.
         * @public
         * @readonly
         */
        readonly fragment: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ttl`.
         * @public
         * @readonly
         */
        readonly ttl: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `headerChecksum`.
         * @public
         * @readonly
         */
        readonly headerChecksum: OPTIONAL<OCTET_STRING>,
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
        readonly destination: OCTET_STRING,
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a IPv4Information
     * @description
     * 
     * This takes an `object` and converts it to a `IPv4Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPv4Information`.
     * @returns {IPv4Information}
     */
    public static _from_object (_o: { [_K in keyof (IPv4Information)]: (IPv4Information)[_K] }): IPv4Information {
        return new IPv4Information(_o.headerLength, _o.typeOfService, _o.totalLength, _o.identification, _o.fragment, _o.ttl, _o.protocol, _o.headerChecksum, _o.source, _o.destination, _o.options);
    }


}

/**
 * @summary The Leading Root Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPv4Information: $.ComponentSpec[] = [
    new $.ComponentSpec("headerLength", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeOfService", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("totalLength", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("identification", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fragment", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ttl", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("protocol", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("headerChecksum", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("source", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("options", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPv4Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPv4Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPv4Information: $.ASN1Decoder<IPv4Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4Information (el: _Element): IPv4Information {
    if (!_cached_decoder_for_IPv4Information) { _cached_decoder_for_IPv4Information = function (el: _Element): IPv4Information {
    let headerLength: OPTIONAL<OCTET_STRING>;
    let typeOfService: OPTIONAL<OCTET_STRING>;
    let totalLength: OPTIONAL<OCTET_STRING>;
    let identification: OPTIONAL<OCTET_STRING>;
    let fragment: OPTIONAL<OCTET_STRING>;
    let ttl: OPTIONAL<OCTET_STRING>;
    let protocol: OPTIONAL<OCTET_STRING>;
    let headerChecksum: OPTIONAL<OCTET_STRING>;
    let source!: OCTET_STRING;
    let destination!: OCTET_STRING;
    let options: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "headerLength": (_el: _Element): void => { headerLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "typeOfService": (_el: _Element): void => { typeOfService = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "totalLength": (_el: _Element): void => { totalLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "identification": (_el: _Element): void => { identification = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fragment": (_el: _Element): void => { fragment = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ttl": (_el: _Element): void => { ttl = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "protocol": (_el: _Element): void => { protocol = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "headerChecksum": (_el: _Element): void => { headerChecksum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "source": (_el: _Element): void => { source = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "options": (_el: _Element): void => { options = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPv4Information,
        _extension_additions_list_spec_for_IPv4Information,
        _root_component_type_list_2_spec_for_IPv4Information,
        undefined,
    );
    return new IPv4Information(
        headerLength,
        typeOfService,
        totalLength,
        identification,
        fragment,
        ttl,
        protocol,
        headerChecksum,
        source,
        destination,
        options
    );
}; }
    return _cached_decoder_for_IPv4Information(el);
}

let _cached_encoder_for_IPv4Information: $.ASN1Encoder<IPv4Information> | null = null;

/**
 * @summary Encodes a(n) IPv4Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4Information, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4Information (value: IPv4Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4Information) { _cached_encoder_for_IPv4Information = function (value: IPv4Information, elGetter: $.ASN1Encoder<IPv4Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.headerLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.headerLength, $.BER)),
            /* IF_ABSENT  */ ((value.typeOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.typeOfService, $.BER)),
            /* IF_ABSENT  */ ((value.totalLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.totalLength, $.BER)),
            /* IF_ABSENT  */ ((value.identification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.identification, $.BER)),
            /* IF_ABSENT  */ ((value.fragment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.fragment, $.BER)),
            /* IF_ABSENT  */ ((value.ttl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.ttl, $.BER)),
            /* IF_ABSENT  */ ((value.protocol === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.protocol, $.BER)),
            /* IF_ABSENT  */ ((value.headerChecksum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.headerChecksum, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.source, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.destination, $.BER),
            /* IF_ABSENT  */ ((value.options === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.options, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPv4Information(value, elGetter);
}


/* eslint-enable */
