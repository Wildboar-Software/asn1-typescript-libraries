/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RangeClass, _decode_RangeClass, _encode_RangeClass, _enum_for_RangeClass } from "../ProSeChargingDataTypes/RangeClass.ta.mjs";


/**
 * @summary ProximityRequestRenewalInfoBlock
 * @description
 *
 * One Proximity Request Renewal captured in a PF-ED-CDR. A renewal updates the
 * already open CDR for the initial request with a new UE location, time window,
 * and range class. The block is table 6.1.3.3.2.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.27.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityRequestRenewalInfoBlock ::= SEQUENCE {
 *    proSeRequestTimestamp   [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeWindow              [1] IMPLICIT INTEGER OPTIONAL,
 *    rangeClass              [2] IMPLICIT RangeClass OPTIONAL,
 *    uELocation              [3] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ProximityRequestRenewalInfoBlock {
    /**
     * @summary `proSeRequestTimestamp`.
     * @description
     *
     * Category Oc. Time the proximity renewal request was received from the UE.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeWindow`.
     * @description
     *
     * Category Oc. Time interval, in minutes, during which this proximity
     * renewal request is valid.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly timeWindow: OPTIONAL<INTEGER>;
    /**
     * @summary `rangeClass`.
     * @description
     *
     * Category Oc. Range class of this proximity renewal request.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly rangeClass: OPTIONAL<RangeClass>;
    /**
     * @summary `uELocation`.
     * @description
     *
     * Category Oc. UE location, at the best known accuracy, when this renewal
     * was received. A Cell ID or geo-location coordinates are examples.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.40 sets UE Location to the 28-bit
     * cell identity of the ECGI, taken from the UE's lower layers.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.2.
     *
     * @public
     * @readonly
     */
    readonly uELocation: OPTIONAL<OCTET_STRING>;

    constructor (
        proSeRequestTimestamp?: OPTIONAL<OCTET_STRING>,
        timeWindow?: OPTIONAL<INTEGER>,
        rangeClass?: OPTIONAL<RangeClass>,
        uELocation?: OPTIONAL<OCTET_STRING>
    ) {
        this.proSeRequestTimestamp = proSeRequestTimestamp;
        this.timeWindow = timeWindow;
        this.rangeClass = rangeClass;
        this.uELocation = uELocation;
    
        if (this.proSeRequestTimestamp !== undefined && (this.proSeRequestTimestamp.length !== 9)) {
            throw new ASN1SizeError("ProximityRequestRenewalInfoBlock.proSeRequestTimestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ProximityRequestRenewalInfoBlock
     * @description
     * 
     * This takes an `object` and converts it to a `ProximityRequestRenewalInfoBlock`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProximityRequestRenewalInfoBlock`.
     * @returns {ProximityRequestRenewalInfoBlock}
     */
    public static _from_object (_o: { [_K in keyof (ProximityRequestRenewalInfoBlock)]: (ProximityRequestRenewalInfoBlock)[_K] }): ProximityRequestRenewalInfoBlock {
        return new ProximityRequestRenewalInfoBlock(_o.proSeRequestTimestamp, _o.timeWindow, _o.rangeClass, _o.uELocation);
    }

        /**
         * @summary The enum used as the type of the component `rangeClass`
         * @public
         * @static
         */

    public static _enum_for_rangeClass = _enum_for_RangeClass;
}

/**
 * @summary The Leading Root Component Types of ProximityRequestRenewalInfoBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProximityRequestRenewalInfoBlock: $.ComponentSpec[] = [
    new $.ComponentSpec("proSeRequestTimestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeWindow", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rangeClass", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ProximityRequestRenewalInfoBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProximityRequestRenewalInfoBlock: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProximityRequestRenewalInfoBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProximityRequestRenewalInfoBlock: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProximityRequestRenewalInfoBlock: $.ASN1Decoder<ProximityRequestRenewalInfoBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximityRequestRenewalInfoBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximityRequestRenewalInfoBlock (el: _Element): ProximityRequestRenewalInfoBlock {
    if (!_cached_decoder_for_ProximityRequestRenewalInfoBlock) { _cached_decoder_for_ProximityRequestRenewalInfoBlock = function (el: _Element): ProximityRequestRenewalInfoBlock {
    let proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    let timeWindow: OPTIONAL<INTEGER>;
    let rangeClass: OPTIONAL<RangeClass>;
    let uELocation: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "proSeRequestTimestamp": (_el: _Element): void => { proSeRequestTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeWindow": (_el: _Element): void => { timeWindow = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rangeClass": (_el: _Element): void => { rangeClass = $._decode_implicit<RangeClass>(() => _decode_RangeClass)(_el); },
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProximityRequestRenewalInfoBlock,
        _extension_additions_list_spec_for_ProximityRequestRenewalInfoBlock,
        _root_component_type_list_2_spec_for_ProximityRequestRenewalInfoBlock,
        undefined,
    );
    return new ProximityRequestRenewalInfoBlock(
        proSeRequestTimestamp,
        timeWindow,
        rangeClass,
        uELocation
    );
}; }
    return _cached_decoder_for_ProximityRequestRenewalInfoBlock(el);
}

let _cached_encoder_for_ProximityRequestRenewalInfoBlock: $.ASN1Encoder<ProximityRequestRenewalInfoBlock> | null = null;

/**
 * @summary Encodes a(n) ProximityRequestRenewalInfoBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximityRequestRenewalInfoBlock, encoded as an ASN.1 Element.
 */
export
function _encode_ProximityRequestRenewalInfoBlock (value: ProximityRequestRenewalInfoBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximityRequestRenewalInfoBlock) { _cached_encoder_for_ProximityRequestRenewalInfoBlock = function (value: ProximityRequestRenewalInfoBlock, _elGetter: $.ASN1Encoder<ProximityRequestRenewalInfoBlock>): _Element {
    const _components: _Element[] = [];
    if (value.proSeRequestTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.proSeRequestTimestamp, $.BER));
    }
    if (value.timeWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timeWindow, $.BER));
    }
    if (value.rangeClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RangeClass, $.BER)(value.rangeClass, $.BER));
    }
    if (value.uELocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.uELocation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProximityRequestRenewalInfoBlock(value, elGetter);
}


/* eslint-enable */
