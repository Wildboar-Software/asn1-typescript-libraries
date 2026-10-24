/* eslint-disable */
import {
    UTCTime,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { StatusType, _decode_StatusType, _encode_StatusType, _enum_for_StatusType } from "../EN301040/StatusType.ta.mjs";
// export { StatusType, _enum_for_StatusType, StatusType_networkFullyAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkFullyAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_networkErrorsAffectingIntercept /* IMPORTED_LONG_ENUMERATION_ITEM */, networkErrorsAffectingIntercept /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_reconfigurationInProgress /* IMPORTED_LONG_ENUMERATION_ITEM */, reconfigurationInProgress /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_sessionExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_gatewayServicesUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, gatewayServicesUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_StatusType, _encode_StatusType } from "../EN301040/StatusType.ta.mjs";


/**
 * @summary LISTATUSind
 * @description
 * 
 * `LI_STATUS_ind` is sent from the SwMI to the mediation function to report a
 * change in SwMI status, for example a problem that affects the ability to
 * provide interception. No response is expected. Clause 4.8 requires the LEMF
 * to be told when an intercept measure is temporarily unavailable; this is the
 * internal status report. The enumerated conditions are the names in
 * `StatusType`.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LISTATUSind ::= SEQUENCE {
 *         tLIInstanceid           TLIIdType,
 *         timestamp               UTCTime,
 *         tETRASysStatus          StatusType
 * }
 * ```
 * 
 * @class
 */
export
class LISTATUSind {
    /**
     * @summary `tLIInstanceid`.
     * @description
     *
     * 16-bit interception tag. It identifies the LEA, the target, the network
     * operator or service provider, and the warrant reference. It is allocated
     * in `LIACTIVATEconf` when activation succeeds and then copied onto later
     * flows so those flows correlate with that provision (clause 4.3.2,
     * clause 6.1). One LI interface instance serves one target (clause 4.7).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `timestamp`.
     * @description
     *
     * UTC time on this information flow. Coordinated Universal Time is defined
     * in clause 3.1. EN 301 040 does not name the event this component
     * timestamps.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `tETRASysStatus`.
     * @description
     *
     * The SwMI condition being reported. The document gives the value names and
     * the example of impaired interception, and it stops there.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly tETRASysStatus: StatusType;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        tETRASysStatus: StatusType
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.tETRASysStatus = tETRASysStatus;
    }

    /**
     * @summary Restructures an object into a LISTATUSind
     * @description
     * 
     * This takes an `object` and converts it to a `LISTATUSind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LISTATUSind`.
     * @returns {LISTATUSind}
     */
    public static _from_object (_o: { [_K in keyof (LISTATUSind)]: (LISTATUSind)[_K] }): LISTATUSind {
        return new LISTATUSind(_o.tLIInstanceid, _o.timestamp, _o.tETRASysStatus);
    }

        /**
         * @summary The enum used as the type of the component `tETRASysStatus`
         * @public
         * @static
         */

    public static _enum_for_tETRASysStatus = _enum_for_StatusType;
}

/**
 * @summary The Leading Root Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LISTATUSind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tETRASysStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LISTATUSind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LISTATUSind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LISTATUSind: $.ASN1Decoder<LISTATUSind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LISTATUSind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LISTATUSind (el: _Element): LISTATUSind {
    if (!_cached_decoder_for_LISTATUSind) { _cached_decoder_for_LISTATUSind = function (el: _Element): LISTATUSind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("LISTATUSind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "timestamp";
    sequence[2].name = "tETRASysStatus";
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let tETRASysStatus!: StatusType;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    timestamp = $._decodeUTCTime(sequence[1]);
    tETRASysStatus = _decode_StatusType(sequence[2]);
    return new LISTATUSind(
        tLIInstanceid,
        timestamp,
        tETRASysStatus,

    );
}; }
    return _cached_decoder_for_LISTATUSind(el);
}

let _cached_encoder_for_LISTATUSind: $.ASN1Encoder<LISTATUSind> | null = null;

/**
 * @summary Encodes a(n) LISTATUSind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LISTATUSind, encoded as an ASN.1 Element.
 */
export
function _encode_LISTATUSind (value: LISTATUSind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LISTATUSind) { _cached_encoder_for_LISTATUSind = function (value: LISTATUSind, elGetter: $.ASN1Encoder<LISTATUSind>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_StatusType, $.BER)(value.tETRASysStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LISTATUSind(value, elGetter);
}


/* eslint-enable */
