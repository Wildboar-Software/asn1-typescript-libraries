/* eslint-disable */
import {
    type BIT_STRING,
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909202/LIIDType.ta.mjs";
// export { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909202/LIIDType.ta.mjs";


/**
 * @summary TTRAFFIC
 * @description
 *
 * `T_TRAFFIC` carries one intercepted traffic packet of the target to the
 * delivery function across INI3. Used when IP carries streamed media. No
 * response is expected.
 *
 * The result of content interception covers calls the target originates,
 * calls to the target, multi-party calls in which the operator believes the
 * target is taking part, and broadcast calls to a population of which the
 * operator believes the target is a member (clause 7.1.1).
 *
 * Annex A requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; `interceptVersion` in the
 * module object identifier is incremented when the published module changes.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.1, clause 7.1.1,
 * annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTRAFFIC ::= SEQUENCE {
 *     version                 INTEGER DEFAULT 1, -- header, version -
 *     lIInstanceid            LIIDType,
 *     iRITransactionNumber    INTEGER,
 *     trafficPacket           BIT STRING,
 *     cryptoChecksum          BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TTRAFFIC {
    /**
     * @summary `version`.
     * @description
     *
     * Version of this document that the structure is defined against. This
     * first edition uses 1. Increment by 1 when ASN.1 parameters are added or
     * existing parameters are modified.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.3.1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<INTEGER>;
    /**
     * @summary `lIInstanceid`.
     * @description
     *
     * The interception this packet belongs to. The same value is used on the
     * corresponding IRI record (clause 6.4.2.1.2).
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.3.2.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly lIInstanceid: LIIDType;
    /**
     * @summary `iRITransactionNumber`.
     * @description
     *
     * With `lIInstanceid`, correlates this packet to a known IRI transaction.
     * If the correlation cannot be determined, set this to zero; the receiver
     * should ignore it. Clause 7.1.2.3.4 notes that the pair plays a role
     * similar to the Communication Identifier in clause 6.2 of TS 101 671.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.3.4.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransactionNumber: INTEGER;
    /**
     * @summary `trafficPacket`.
     * @description
     *
     * A bit-exact copy of the intercepted IP packet.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.3.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly trafficPacket: BIT_STRING;
    /**
     * @summary `cryptoChecksum`.
     * @description
     *
     * Optional cryptographic checksum over the main content of the record.
     * The operator may include it so the integrity of the intercepted data
     * can be checked. The mechanism should follow the operator's security
     * policy. This document does not name an algorithm. Spelled
     * `cryptoCheckSum` on `TARGETACTIVITYMONITOR`.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 7.1.2.3.6.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly cryptoChecksum: OPTIONAL<BIT_STRING>;

    constructor (
        version: OPTIONAL<INTEGER>,
        lIInstanceid: LIIDType,
        iRITransactionNumber: INTEGER,
        trafficPacket: BIT_STRING,
        cryptoChecksum?: OPTIONAL<BIT_STRING>
    ) {
        this.version = version;
        this.lIInstanceid = lIInstanceid;
        this.iRITransactionNumber = iRITransactionNumber;
        this.trafficPacket = trafficPacket;
        this.cryptoChecksum = cryptoChecksum;
    }

    /**
     * @summary Restructures an object into a TTRAFFIC
     * @description
     * 
     * This takes an `object` and converts it to a `TTRAFFIC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTRAFFIC`.
     * @returns {TTRAFFIC}
     */
    public static _from_object (_o: { [_K in keyof (TTRAFFIC)]: (TTRAFFIC)[_K] }): TTRAFFIC {
        return new TTRAFFIC(_o.version, _o.lIInstanceid, _o.iRITransactionNumber, _o.trafficPacket, _o.cryptoChecksum);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return 1; }
}

/**
 * @summary The Leading Root Component Types of TTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTRAFFIC: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIInstanceid", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iRITransactionNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("trafficPacket", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cryptoChecksum", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTRAFFIC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTRAFFIC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTRAFFIC: $.ASN1Decoder<TTRAFFIC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTRAFFIC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTRAFFIC (el: _Element): TTRAFFIC {
    if (!_cached_decoder_for_TTRAFFIC) { _cached_decoder_for_TTRAFFIC = function (el: _Element): TTRAFFIC {
    let version: OPTIONAL<INTEGER> = TTRAFFIC._default_value_for_version;
    let lIInstanceid!: LIIDType;
    let iRITransactionNumber!: INTEGER;
    let trafficPacket!: BIT_STRING;
    let cryptoChecksum: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeInteger(_el); },
        "lIInstanceid": (_el: _Element): void => { lIInstanceid = _decode_LIIDType(_el); },
        "iRITransactionNumber": (_el: _Element): void => { iRITransactionNumber = $._decodeInteger(_el); },
        "trafficPacket": (_el: _Element): void => { trafficPacket = $._decodeBitString(_el); },
        "cryptoChecksum": (_el: _Element): void => { cryptoChecksum = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TTRAFFIC,
        _extension_additions_list_spec_for_TTRAFFIC,
        _root_component_type_list_2_spec_for_TTRAFFIC,
        undefined,
    );
    return new TTRAFFIC(
        version,
        lIInstanceid,
        iRITransactionNumber,
        trafficPacket,
        cryptoChecksum
    );
}; }
    return _cached_decoder_for_TTRAFFIC(el);
}

let _cached_encoder_for_TTRAFFIC: $.ASN1Encoder<TTRAFFIC> | null = null;

/**
 * @summary Encodes a(n) TTRAFFIC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTRAFFIC, encoded as an ASN.1 Element.
 */
export
function _encode_TTRAFFIC (value: TTRAFFIC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTRAFFIC) { _cached_encoder_for_TTRAFFIC = function (value: TTRAFFIC, elGetter: $.ASN1Encoder<TTRAFFIC>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, TTRAFFIC._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LIIDType, $.BER)(value.lIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.iRITransactionNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER)(value.trafficPacket, $.BER);
    if (value.cryptoChecksum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.cryptoChecksum, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TTRAFFIC(value, elGetter);
}


/* eslint-enable */
