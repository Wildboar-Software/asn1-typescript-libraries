/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    type UTCTime,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";


/**
 * @summary LIACTIVATEconf
 * @description
 * 
 * `LI_ACTIVATE_conf` is the SwMI answer to `LIACTIVATEreq`. No further response
 * is expected. When `result` is TRUE, `tLIInstanceid` is present and becomes
 * the TETRA pointer to this interception; later `LIMODIFYreq` and monitor flows
 * cite it. When `result` is FALSE, `tLIInstanceid` is absent.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIACTIVATEconf ::= SEQUENCE {
 *     timeStamp                UTCTime,
 *     invokeId                INTEGER,
 *     result                    BOOLEAN,
 *     tLIInstanceid            TLIIdType OPTIONAL -- Conditional on value of Result
 * }
 * ```
 * 
 * @class
 */
export
class LIACTIVATEconf {
    /**
     * @summary `timeStamp`.
     * @description
     *
     * UTC time on this information flow. Coordinated Universal Time is defined
     * in clause 3.1. EN 301 040 does not name the event this component
     * timestamps.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: UTCTime;
    /**
     * @summary `invokeId`.
     * @description
     *
     * Integer carried on this confirmation and on the `LIACTIVATEreq` it
     * answers. EN 301 040 does not state a rule for matching the two values.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly invokeId: INTEGER;
    /**
     * @summary `result`.
     * @description
     *
     * TRUE when the SwMI accepted the activation. FALSE when it rejected the
     * activation; in that case `tLIInstanceid` is omitted.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly result: BOOLEAN;
    /**
     * @summary `tLIInstanceid`.
     * @description
     *
     * Present only when `result` is TRUE. This is the first issuance of the
     * 16-bit tag defined in clause 6.1. Later modify, status, monitor, and
     * traffic flows copy it.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.2, clause 6.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly tLIInstanceid: OPTIONAL<TLIIdType>;

    constructor (
        timeStamp: UTCTime,
        invokeId: INTEGER,
        result: BOOLEAN,
        tLIInstanceid?: OPTIONAL<TLIIdType>
    ) {
        this.timeStamp = timeStamp;
        this.invokeId = invokeId;
        this.result = result;
        this.tLIInstanceid = tLIInstanceid;
    }

    /**
     * @summary Restructures an object into a LIACTIVATEconf
     * @description
     * 
     * This takes an `object` and converts it to a `LIACTIVATEconf`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIACTIVATEconf`.
     * @returns {LIACTIVATEconf}
     */
    public static _from_object (_o: { [_K in keyof (LIACTIVATEconf)]: (LIACTIVATEconf)[_K] }): LIACTIVATEconf {
        return new LIACTIVATEconf(_o.timeStamp, _o.invokeId, _o.result, _o.tLIInstanceid);
    }


}

/**
 * @summary The Leading Root Component Types of LIACTIVATEconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIACTIVATEconf: $.ComponentSpec[] = [
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tLIInstanceid", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LIACTIVATEconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIACTIVATEconf: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIACTIVATEconf
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIACTIVATEconf: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIACTIVATEconf: $.ASN1Decoder<LIACTIVATEconf> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIACTIVATEconf
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIACTIVATEconf (el: _Element): LIACTIVATEconf {
    if (!_cached_decoder_for_LIACTIVATEconf) { _cached_decoder_for_LIACTIVATEconf = function (el: _Element): LIACTIVATEconf {
    let timeStamp!: UTCTime;
    let invokeId!: INTEGER;
    let result!: BOOLEAN;
    let tLIInstanceid: OPTIONAL<TLIIdType>;
    const callbacks: $.DecodingMap = {
        "timeStamp": (_el: _Element): void => { timeStamp = $._decodeUTCTime(_el); },
        "invokeId": (_el: _Element): void => { invokeId = $._decodeInteger(_el); },
        "result": (_el: _Element): void => { result = $._decodeBoolean(_el); },
        "tLIInstanceid": (_el: _Element): void => { tLIInstanceid = _decode_TLIIdType(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LIACTIVATEconf,
        _extension_additions_list_spec_for_LIACTIVATEconf,
        _root_component_type_list_2_spec_for_LIACTIVATEconf,
        undefined,
    );
    return new LIACTIVATEconf(
        timeStamp,
        invokeId,
        result,
        tLIInstanceid
    );
}; }
    return _cached_decoder_for_LIACTIVATEconf(el);
}

let _cached_encoder_for_LIACTIVATEconf: $.ASN1Encoder<LIACTIVATEconf> | null = null;

/**
 * @summary Encodes a(n) LIACTIVATEconf into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIACTIVATEconf, encoded as an ASN.1 Element.
 */
export
function _encode_LIACTIVATEconf (value: LIACTIVATEconf, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIACTIVATEconf) { _cached_encoder_for_LIACTIVATEconf = function (value: LIACTIVATEconf, elGetter: $.ASN1Encoder<LIACTIVATEconf>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTCTime, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.invokeId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.result, $.BER);
    if (value.tLIInstanceid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LIACTIVATEconf(value, elGetter);
}


/* eslint-enable */
