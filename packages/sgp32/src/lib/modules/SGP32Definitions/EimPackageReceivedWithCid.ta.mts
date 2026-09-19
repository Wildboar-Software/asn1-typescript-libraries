/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimPackageReceivedWithCid_correlationId, _decode_EimPackageReceivedWithCid_correlationId, _encode_EimPackageReceivedWithCid_correlationId } from "../SGP32Definitions/EimPackageReceivedWithCid-correlationId.ta.mjs";
// export { EimPackageReceivedWithCid_correlationId, _decode_EimPackageReceivedWithCid_correlationId, _encode_EimPackageReceivedWithCid_correlationId } from "../SGP32Definitions/EimPackageReceivedWithCid-correlationId.ta.mjs";


/**
 * @summary EimPackageReceivedWithCid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageReceivedWithCid ::= SEQUENCE {
 *     correlationId CHOICE {
 *         eimTransactionId [0] TransactionId, -- if received in the EimPackage
 *         eidValue [APPLICATION 26] Octet16 -- otherwise
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EimPackageReceivedWithCid {
    constructor (
        /**
         * @summary `correlationId`.
         * @public
         * @readonly
         */
        readonly correlationId: OPTIONAL<EimPackageReceivedWithCid_correlationId>
    ) {}

    /**
     * @summary Restructures an object into a EimPackageReceivedWithCid
     * @description
     * 
     * This takes an `object` and converts it to a `EimPackageReceivedWithCid`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimPackageReceivedWithCid`.
     * @returns {EimPackageReceivedWithCid}
     */
    public static _from_object (_o: { [_K in keyof (EimPackageReceivedWithCid)]: (EimPackageReceivedWithCid)[_K] }): EimPackageReceivedWithCid {
        return new EimPackageReceivedWithCid(_o.correlationId);
    }


}

/**
 * @summary The Leading Root Component Types of EimPackageReceivedWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimPackageReceivedWithCid: $.ComponentSpec[] = [
    new $.ComponentSpec("correlationId", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EimPackageReceivedWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimPackageReceivedWithCid: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimPackageReceivedWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimPackageReceivedWithCid: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimPackageReceivedWithCid: $.ASN1Decoder<EimPackageReceivedWithCid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageReceivedWithCid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageReceivedWithCid (el: _Element): EimPackageReceivedWithCid {
    if (!_cached_decoder_for_EimPackageReceivedWithCid) { _cached_decoder_for_EimPackageReceivedWithCid = function (el: _Element): EimPackageReceivedWithCid {
    let correlationId: OPTIONAL<EimPackageReceivedWithCid_correlationId>;
    const callbacks: $.DecodingMap = {
        "correlationId": (_el: _Element): void => { correlationId = _decode_EimPackageReceivedWithCid_correlationId(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimPackageReceivedWithCid,
        _extension_additions_list_spec_for_EimPackageReceivedWithCid,
        _root_component_type_list_2_spec_for_EimPackageReceivedWithCid,
        undefined,
    );
    return new EimPackageReceivedWithCid(
        correlationId
    );
}; }
    return _cached_decoder_for_EimPackageReceivedWithCid(el);
}

let _cached_encoder_for_EimPackageReceivedWithCid: $.ASN1Encoder<EimPackageReceivedWithCid> | null = null;

/**
 * @summary Encodes a(n) EimPackageReceivedWithCid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageReceivedWithCid, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageReceivedWithCid (value: EimPackageReceivedWithCid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageReceivedWithCid) { _cached_encoder_for_EimPackageReceivedWithCid = function (value: EimPackageReceivedWithCid, elGetter: $.ASN1Encoder<EimPackageReceivedWithCid>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.correlationId === undefined) ? undefined : _encode_EimPackageReceivedWithCid_correlationId(value.correlationId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimPackageReceivedWithCid(value, elGetter);
}


/* eslint-enable */
