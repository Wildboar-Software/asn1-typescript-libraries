/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary IPv4Information
 * @description
 *
 * Fields from the IPv4 header of the target packet (IETF RFC 791), as
 * used by a header report or a summary report (ETSI TS 102 232-3
 * V3.9.1, clauses 6.2.3.2 and 6.2.4). Each populated value is a copy
 * of the corresponding octet or octets, in the same byte order. Where
 * the header field is smaller than an octet, set the bits that are
 * not part of that field to zero.
 *
 * On a summary report, populate only the fields that identify the
 * flow (source, destination, and protocol) and omit the others
 * (table 4, clause 6.2.4.2).
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
    /**
     * @summary `headerLength`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly headerLength: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `typeOfService`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * Bits outside the type-of-service field are zero (clause 6.2.3.2).
     *
     * @public
     * @readonly
     */
    readonly typeOfService: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `totalLength`.
     * @description
     *
     * Copy of the Total Length field (IETF RFC 791). Packet-flow byte
     * counts sum this field across the packets in the summary
     * (tables 3 and 4, and table 5).
     *
     * @public
     * @readonly
     */
    readonly totalLength: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `identification`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly identification: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fragment`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly fragment: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ttl`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly ttl: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `protocol`.
     * @description
     *
     * Copy of the Protocol field (IETF RFC 791). Together with the
     * addresses and the layer-4 ports, this identifies a packet flow
     * (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly protocol: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `headerChecksum`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly headerChecksum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `source`.
     * @description
     *
     * IPv4 source address. Required. It is part of the packet-flow
     * identity (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly source: OCTET_STRING;
    /**
     * @summary `destination`.
     * @description
     *
     * IPv4 destination address. Required. It is part of the packet-flow
     * identity (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly destination: OCTET_STRING;
    /**
     * @summary `options`.
     * @description
     *
     * Copy of this IPv4 header field (IETF RFC 791). Same byte order as
     * on the wire. On a summary report, include it only when it
     * identifies the flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly options: OPTIONAL<OCTET_STRING>;

    constructor (
        headerLength: OPTIONAL<OCTET_STRING>,
        typeOfService: OPTIONAL<OCTET_STRING>,
        totalLength: OPTIONAL<OCTET_STRING>,
        identification: OPTIONAL<OCTET_STRING>,
        fragment: OPTIONAL<OCTET_STRING>,
        ttl: OPTIONAL<OCTET_STRING>,
        protocol: OPTIONAL<OCTET_STRING>,
        headerChecksum: OPTIONAL<OCTET_STRING>,
        source: OCTET_STRING,
        destination: OCTET_STRING,
        options: OPTIONAL<OCTET_STRING>
    ) {
        this.headerLength = headerLength;
        this.typeOfService = typeOfService;
        this.totalLength = totalLength;
        this.identification = identification;
        this.fragment = fragment;
        this.ttl = ttl;
        this.protocol = protocol;
        this.headerChecksum = headerChecksum;
        this.source = source;
        this.destination = destination;
        this.options = options;
    }

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
        "totalLength": (_el: _Element): void => {
            totalLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (totalLength.length < 2 || totalLength.length > 2) {
                throw new ASN1SizeError("IPv4Information.totalLength violates SIZE constraint");
            }
        },
        "identification": (_el: _Element): void => {
            identification = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (identification.length < 2 || identification.length > 2) {
                throw new ASN1SizeError("IPv4Information.identification violates SIZE constraint");
            }
        },
        "fragment": (_el: _Element): void => {
            fragment = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (fragment.length < 2 || fragment.length > 2) {
                throw new ASN1SizeError("IPv4Information.fragment violates SIZE constraint");
            }
        },
        "ttl": (_el: _Element): void => { ttl = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "protocol": (_el: _Element): void => { protocol = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "headerChecksum": (_el: _Element): void => {
            headerChecksum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (headerChecksum.length < 2 || headerChecksum.length > 2) {
                throw new ASN1SizeError("IPv4Information.headerChecksum violates SIZE constraint");
            }
        },
        "source": (_el: _Element): void => {
            source = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (source.length < 4 || source.length > 4) {
                throw new ASN1SizeError("IPv4Information.source violates SIZE constraint");
            }
        },
        "destination": (_el: _Element): void => {
            destination = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (destination.length < 4 || destination.length > 4) {
                throw new ASN1SizeError("IPv4Information.destination violates SIZE constraint");
            }
        },
        "options": (_el: _Element): void => {
            options = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (options.length > 40) {
                throw new ASN1SizeError("IPv4Information.options violates SIZE constraint");
            }
        },
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
    const _components: _Element[] = new Array(11);
    let _components_i = 0;
    if (value.headerLength !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.headerLength, $.BER);
    }
    if (value.typeOfService !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.typeOfService, $.BER);
    }
    if (value.totalLength !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.totalLength, $.BER);
    }
    if (value.identification !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.identification, $.BER);
    }
    if (value.fragment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.fragment, $.BER);
    }
    if (value.ttl !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.ttl, $.BER);
    }
    if (value.protocol !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.protocol, $.BER);
    }
    if (value.headerChecksum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.headerChecksum, $.BER);
    }
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.source, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.destination, $.BER);
    if (value.options !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.options, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPv4Information(value, elGetter);
}


/* eslint-enable */
