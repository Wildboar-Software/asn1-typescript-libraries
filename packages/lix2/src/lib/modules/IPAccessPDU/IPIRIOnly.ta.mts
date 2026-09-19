/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPInformation, _decode_IPInformation, _encode_IPInformation } from "../IPAccessPDU/IPInformation.ta.mjs";
// export { IPInformation, _decode_IPInformation, _encode_IPInformation } from "../IPAccessPDU/IPInformation.ta.mjs";
import { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../IPAccessPDU/ProtocolInformation.ta.mjs";
// export { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../IPAccessPDU/ProtocolInformation.ta.mjs";


/**
 * @summary IPIRIOnly
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIOnly ::= SEQUENCE
 * {
 *     iPIRIOnlyObjId              [0] RELATIVE-OID,
 *     iPInformation               [1] IPInformation,
 *     protocolInformation         [2] ProtocolInformation,
 *     iPAggregatedNbrOfPackets    [3] INTEGER OPTIONAL,
 *     iPAggregatedNbrOfBytes      [4] INTEGER OPTIONAL,
 *     ...,
 *     pDSRInformation             [5] PDSRInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IPIRIOnly {
    constructor (
        /**
         * @summary `iPIRIOnlyObjId`.
         * @public
         * @readonly
         */
        readonly iPIRIOnlyObjId: RELATIVE_OID,
        /**
         * @summary `iPInformation`.
         * @public
         * @readonly
         */
        readonly iPInformation: IPInformation,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: ProtocolInformation,
        /**
         * @summary `iPAggregatedNbrOfPackets`.
         * @public
         * @readonly
         */
        readonly iPAggregatedNbrOfPackets: OPTIONAL<INTEGER>,
        /**
         * @summary `iPAggregatedNbrOfBytes`.
         * @public
         * @readonly
         */
        readonly iPAggregatedNbrOfBytes: OPTIONAL<INTEGER>,
        /**
         * @summary `pDSRInformation`.
         * @public
         * @readonly
         */
        readonly pDSRInformation: OPTIONAL<PDSRInformation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IPIRIOnly
     * @description
     * 
     * This takes an `object` and converts it to a `IPIRIOnly`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPIRIOnly`.
     * @returns {IPIRIOnly}
     */
    public static _from_object (_o: { [_K in keyof (IPIRIOnly)]: (IPIRIOnly)[_K] }): IPIRIOnly {
        return new IPIRIOnly(_o.iPIRIOnlyObjId, _o.iPInformation, _o.protocolInformation, _o.iPAggregatedNbrOfPackets, _o.iPAggregatedNbrOfBytes, _o.pDSRInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    new $.ComponentSpec("iPIRIOnlyObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPAggregatedNbrOfPackets", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPAggregatedNbrOfBytes", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    /* FIXME: pDSRInformation COULD_NOT_RESOLVE_TYPE_DEF */
];

let _cached_decoder_for_IPIRIOnly: $.ASN1Decoder<IPIRIOnly> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIOnly
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIOnly (el: _Element): IPIRIOnly {
    if (!_cached_decoder_for_IPIRIOnly) { _cached_decoder_for_IPIRIOnly = function (el: _Element): IPIRIOnly {
    let iPIRIOnlyObjId!: RELATIVE_OID;
    let iPInformation!: IPInformation;
    let protocolInformation!: ProtocolInformation;
    let iPAggregatedNbrOfPackets: OPTIONAL<INTEGER>;
    let iPAggregatedNbrOfBytes: OPTIONAL<INTEGER>;
    let pDSRInformation: OPTIONAL<PDSRInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPIRIOnlyObjId": (_el: _Element): void => { iPIRIOnlyObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "iPInformation": (_el: _Element): void => { iPInformation = $._decode_explicit<IPInformation>(() => _decode_IPInformation)(_el); },
        "protocolInformation": (_el: _Element): void => { protocolInformation = $._decode_explicit<ProtocolInformation>(() => _decode_ProtocolInformation)(_el); },
        "iPAggregatedNbrOfPackets": (_el: _Element): void => { iPAggregatedNbrOfPackets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iPAggregatedNbrOfBytes": (_el: _Element): void => { iPAggregatedNbrOfBytes = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pDSRInformation": (_el: _Element): void => { pDSRInformation = $._decode_implicit<PDSRInformation>(() => _decode_PDSRInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPIRIOnly,
        _extension_additions_list_spec_for_IPIRIOnly,
        _root_component_type_list_2_spec_for_IPIRIOnly,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPIRIOnly(
        iPIRIOnlyObjId,
        iPInformation,
        protocolInformation,
        iPAggregatedNbrOfPackets,
        iPAggregatedNbrOfBytes,
        pDSRInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPIRIOnly(el);
}

let _cached_encoder_for_IPIRIOnly: $.ASN1Encoder<IPIRIOnly> | null = null;

/**
 * @summary Encodes a(n) IPIRIOnly into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIOnly, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIOnly (value: IPIRIOnly, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIOnly) { _cached_encoder_for_IPIRIOnly = function (value: IPIRIOnly, elGetter: $.ASN1Encoder<IPIRIOnly>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPIRIOnlyObjId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPInformation, $.BER)(value.iPInformation, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ProtocolInformation, $.BER)(value.protocolInformation, $.BER),
            /* IF_ABSENT  */ ((value.iPAggregatedNbrOfPackets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.iPAggregatedNbrOfPackets, $.BER)),
            /* IF_ABSENT  */ ((value.iPAggregatedNbrOfBytes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.iPAggregatedNbrOfBytes, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.pDSRInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDSRInformation, $.BER)(value.pDSRInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPIRIOnly(value, elGetter);
}


/* eslint-enable */
