/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSCspDataDetail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCspDataDetail ::= SEQUENCE {
 *         keySpec        [0] INTEGER,
 *         cardName     [1] OCTET STRING OPTIONAL,
 *         readerName     [2] OCTET STRING OPTIONAL,
 *         containerName     [3] OCTET STRING OPTIONAL,
 *         cspName     [4] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSCspDataDetail {
    constructor (
        /**
         * @summary `keySpec`.
         * @public
         * @readonly
         */
        readonly keySpec: INTEGER,
        /**
         * @summary `cardName`.
         * @public
         * @readonly
         */
        readonly cardName: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `readerName`.
         * @public
         * @readonly
         */
        readonly readerName: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `containerName`.
         * @public
         * @readonly
         */
        readonly containerName: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `cspName`.
         * @public
         * @readonly
         */
        readonly cspName: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TSCspDataDetail
     * @description
     * 
     * This takes an `object` and converts it to a `TSCspDataDetail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSCspDataDetail`.
     * @returns {TSCspDataDetail}
     */
    public static _from_object (_o: { [_K in keyof (TSCspDataDetail)]: (TSCspDataDetail)[_K] }): TSCspDataDetail {
        return new TSCspDataDetail(_o.keySpec, _o.cardName, _o.readerName, _o.containerName, _o.cspName);
    }


}

/**
 * @summary The Leading Root Component Types of TSCspDataDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSCspDataDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("keySpec", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cardName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("readerName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("containerName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cspName", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TSCspDataDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSCspDataDetail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSCspDataDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSCspDataDetail: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSCspDataDetail: $.ASN1Decoder<TSCspDataDetail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCspDataDetail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCspDataDetail (el: _Element): TSCspDataDetail {
    if (!_cached_decoder_for_TSCspDataDetail) { _cached_decoder_for_TSCspDataDetail = function (el: _Element): TSCspDataDetail {
    let keySpec!: INTEGER;
    let cardName: OPTIONAL<OCTET_STRING>;
    let readerName: OPTIONAL<OCTET_STRING>;
    let containerName: OPTIONAL<OCTET_STRING>;
    let cspName: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "keySpec": (_el: _Element): void => { keySpec = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cardName": (_el: _Element): void => { cardName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "readerName": (_el: _Element): void => { readerName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "containerName": (_el: _Element): void => { containerName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cspName": (_el: _Element): void => { cspName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSCspDataDetail,
        _extension_additions_list_spec_for_TSCspDataDetail,
        _root_component_type_list_2_spec_for_TSCspDataDetail,
        undefined,
    );
    return new TSCspDataDetail(
        keySpec,
        cardName,
        readerName,
        containerName,
        cspName
    );
}; }
    return _cached_decoder_for_TSCspDataDetail(el);
}

let _cached_encoder_for_TSCspDataDetail: $.ASN1Encoder<TSCspDataDetail> | null = null;

/**
 * @summary Encodes a(n) TSCspDataDetail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCspDataDetail, encoded as an ASN.1 Element.
 */
export
function _encode_TSCspDataDetail (value: TSCspDataDetail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCspDataDetail) { _cached_encoder_for_TSCspDataDetail = function (value: TSCspDataDetail, elGetter: $.ASN1Encoder<TSCspDataDetail>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.keySpec, $.BER),
            /* IF_ABSENT  */ ((value.cardName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cardName, $.BER)),
            /* IF_ABSENT  */ ((value.readerName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.readerName, $.BER)),
            /* IF_ABSENT  */ ((value.containerName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.containerName, $.BER)),
            /* IF_ABSENT  */ ((value.cspName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.cspName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSCspDataDetail(value, elGetter);
}


/* eslint-enable */
