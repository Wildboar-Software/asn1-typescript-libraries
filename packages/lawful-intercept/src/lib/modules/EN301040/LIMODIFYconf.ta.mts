/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type UTCTime,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";


/**
 * @summary LIMODIFYconf
 * @description
 * 
 * `LI_MODIFY_conf` is the SwMI answer to `LIMODIFYreq`. `result` is TRUE when
 * the modification succeeded and FALSE otherwise. No further response is
 * expected. The confirmation repeats the interception tag, the timestamp, and
 * the modification number of the request.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIMODIFYconf ::= SEQUENCE {
 *         tLIInstanceid           TLIIdType,
 *         timestamp                UTCTime,
 *         modificationNumber        INTEGER,
 *         result                    BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class LIMODIFYconf {
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
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.4.
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
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `modificationNumber`.
     * @description
     *
     * The `modificationNumber` from the `LIMODIFYreq` this confirmation
     * answers.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly modificationNumber: INTEGER;
    /**
     * @summary `result`.
     * @description
     *
     * TRUE when the SwMI applied the modification. FALSE when it did not.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly result: BOOLEAN;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        modificationNumber: INTEGER,
        result: BOOLEAN
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.modificationNumber = modificationNumber;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a LIMODIFYconf
     * @description
     * 
     * This takes an `object` and converts it to a `LIMODIFYconf`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIMODIFYconf`.
     * @returns {LIMODIFYconf}
     */
    public static _from_object (_o: { [_K in keyof (LIMODIFYconf)]: (LIMODIFYconf)[_K] }): LIMODIFYconf {
        return new LIMODIFYconf(_o.tLIInstanceid, _o.timestamp, _o.modificationNumber, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of LIMODIFYconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIMODIFYconf: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modificationNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LIMODIFYconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIMODIFYconf: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIMODIFYconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIMODIFYconf: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIMODIFYconf: $.ASN1Decoder<LIMODIFYconf> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIMODIFYconf
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIMODIFYconf (el: _Element): LIMODIFYconf {
    if (!_cached_decoder_for_LIMODIFYconf) { _cached_decoder_for_LIMODIFYconf = function (el: _Element): LIMODIFYconf {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("LIMODIFYconf contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "timestamp";
    sequence[2].name = "modificationNumber";
    sequence[3].name = "result";
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let modificationNumber!: INTEGER;
    let result!: BOOLEAN;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    timestamp = $._decodeUTCTime(sequence[1]);
    modificationNumber = $._decodeInteger(sequence[2]);
    result = $._decodeBoolean(sequence[3]);
    return new LIMODIFYconf(
        tLIInstanceid,
        timestamp,
        modificationNumber,
        result,

    );
}; }
    return _cached_decoder_for_LIMODIFYconf(el);
}

let _cached_encoder_for_LIMODIFYconf: $.ASN1Encoder<LIMODIFYconf> | null = null;

/**
 * @summary Encodes a(n) LIMODIFYconf into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIMODIFYconf, encoded as an ASN.1 Element.
 */
export
function _encode_LIMODIFYconf (value: LIMODIFYconf, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIMODIFYconf) { _cached_encoder_for_LIMODIFYconf = function (value: LIMODIFYconf, elGetter: $.ASN1Encoder<LIMODIFYconf>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.modificationNumber, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LIMODIFYconf(value, elGetter);
}


/* eslint-enable */
