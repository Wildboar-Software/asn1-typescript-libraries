/* eslint-disable */
import {
    type BIT_STRING,
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";
// export { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";


/**
 * @summary CTTRAFFIC
 * @description
 *
 * `CT_TRAFFIC` carries one intercepted IP packet of a co-target to the
 * Delivery Function across INI3. No response is expected. Used only when
 * IP streams the media (clause 9.1). Each successive correspondent is
 * distinguished by incrementing `correspondentCount`. The packet is a
 * bit-exact copy of the IP packet the operator received. The operator
 * does not interpret it and does not remove user-level compression or
 * encryption (clause 4.4, clause 9.1.2.3.5). If INI3 arrives with
 * network encryption, the LIMF removes that encryption (clause 5.1).
 *
 * The result covers the same calls as `TTRAFFIC`: calls the target
 * originates or receives, multi-party calls in which the operator
 * believes the target is taking part, and broadcast calls to a
 * population of which the operator believes the target is a member
 * (clause 9.1.1). The CCIF is in the CMTS and the MG (clause 8.3).
 *
 * `iRITransactionNumber` with `lIInstanceid` correlates this content
 * with the IRI transaction (clause 4.2.2.3, clause 9.1.2.3.4). Transfer
 * uses the same content service access point as `TTRAFFIC`: integrity,
 * confidentiality, and no retransmission constraint, with security
 * mechanism pkt-s22 or as modified by clause 8 of TS 101 909-20-2
 * (clause 9.1.2).
 *
 * Annex A requires ITU-T Recommendation X.680 and the Basic Encoding
 * Rules (ITU-T Recommendation X.690), plus the data-definition rules in
 * annex D of TS 101 671. The module has no extension markers;
 * interceptVersion in the module object identifier is incremented when
 * the published module changes. This document does not define HI3.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.2, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTTRAFFIC ::= SEQUENCE {
 *     version                 INTEGER DEFAULT 1, -- header, version -
 *     lIInstanceid            LIIDType,
 *     correspondentCount      INTEGER,
 *     iRITransactionNumber    INTEGER,
 *     trafficPacket           BIT STRING,
 *     cryptoChecksum          BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTTRAFFIC {
    /**
     * @summary `version`.
     * @description
     *
     * Version of the present document that defines this structure. For
     * the first version the value is 1, which is the default.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.3.1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<INTEGER>;
    /**
     * @summary `lIInstanceid`.
     * @description
     *
     * Identifies the LEA, the target, the network operator or service
     * provider, and the warrant reference. The same tag heads
     * `TARGETACTIVITYMONITOR-1`. With `iRITransactionNumber` it
     * correlates this packet with that IRI transaction.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.3.2.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly lIInstanceid: LIIDType;
    /**
     * @summary `correspondentCount`.
     * @description
     *
     * Distinguishes the intercepted content of each of the target's
     * correspondents. The first correspondent is 0. Each successive
     * correspondent increments this value.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.2,
     * clause 9.1.2.3.3.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly correspondentCount: INTEGER;
    /**
     * @summary `iRITransactionNumber`.
     * @description
     *
     * With `lIInstanceid`, correlates this packet with a known IRI
     * transaction. If the correlation cannot be determined the value is
     * 0 and the receiver should ignore it. The pair plays the role
     * TS 101 671 clause 6.2 gives to the Communication Identifier.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.3.4.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransactionNumber: INTEGER;
    /**
     * @summary `trafficPacket`.
     * @description
     *
     * Bit-exact copy of the intercepted IP packet from the co-target.
     * Clause 9.1.1 says the intercepted packet is embedded in this
     * element; the only embedding rule given is that copy
     * (clause 9.1.2.3.5).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.3.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly trafficPacket: BIT_STRING;
    /**
     * @summary `cryptoChecksum`.
     * @description
     *
     * Optional cryptographic checksum over the main content of the
     * record. The operator may include it. The mechanism follows the
     * operator's security policy; this document does not name an
     * algorithm.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.3.6.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly cryptoChecksum: OPTIONAL<BIT_STRING>;

    constructor (
        version: OPTIONAL<INTEGER>,
        lIInstanceid: LIIDType,
        correspondentCount: INTEGER,
        iRITransactionNumber: INTEGER,
        trafficPacket: BIT_STRING,
        cryptoChecksum?: OPTIONAL<BIT_STRING>
    ) {
        this.version = version;
        this.lIInstanceid = lIInstanceid;
        this.correspondentCount = correspondentCount;
        this.iRITransactionNumber = iRITransactionNumber;
        this.trafficPacket = trafficPacket;
        this.cryptoChecksum = cryptoChecksum;
    }

    /**
     * @summary Restructures an object into a CTTRAFFIC
     * @description
     * 
     * This takes an `object` and converts it to a `CTTRAFFIC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTTRAFFIC`.
     * @returns {CTTRAFFIC}
     */
    public static _from_object (_o: { [_K in keyof (CTTRAFFIC)]: (CTTRAFFIC)[_K] }): CTTRAFFIC {
        return new CTTRAFFIC(_o.version, _o.lIInstanceid, _o.correspondentCount, _o.iRITransactionNumber, _o.trafficPacket, _o.cryptoChecksum);
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
 * @summary The Leading Root Component Types of CTTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTTRAFFIC: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIInstanceid", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correspondentCount", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iRITransactionNumber", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("trafficPacket", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cryptoChecksum", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CTTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTTRAFFIC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTTRAFFIC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTTRAFFIC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTTRAFFIC: $.ASN1Decoder<CTTRAFFIC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTTRAFFIC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTTRAFFIC (el: _Element): CTTRAFFIC {
    if (!_cached_decoder_for_CTTRAFFIC) { _cached_decoder_for_CTTRAFFIC = function (el: _Element): CTTRAFFIC {
    let version: OPTIONAL<INTEGER> = CTTRAFFIC._default_value_for_version;
    let lIInstanceid!: LIIDType;
    let correspondentCount!: INTEGER;
    let iRITransactionNumber!: INTEGER;
    let trafficPacket!: BIT_STRING;
    let cryptoChecksum: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeInteger(_el); },
        "lIInstanceid": (_el: _Element): void => { lIInstanceid = _decode_LIIDType(_el); },
        "correspondentCount": (_el: _Element): void => { correspondentCount = $._decodeInteger(_el); },
        "iRITransactionNumber": (_el: _Element): void => { iRITransactionNumber = $._decodeInteger(_el); },
        "trafficPacket": (_el: _Element): void => { trafficPacket = $._decodeBitString(_el); },
        "cryptoChecksum": (_el: _Element): void => { cryptoChecksum = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTTRAFFIC,
        _extension_additions_list_spec_for_CTTRAFFIC,
        _root_component_type_list_2_spec_for_CTTRAFFIC,
        undefined,
    );
    return new CTTRAFFIC(
        version,
        lIInstanceid,
        correspondentCount,
        iRITransactionNumber,
        trafficPacket,
        cryptoChecksum
    );
}; }
    return _cached_decoder_for_CTTRAFFIC(el);
}

let _cached_encoder_for_CTTRAFFIC: $.ASN1Encoder<CTTRAFFIC> | null = null;

/**
 * @summary Encodes a(n) CTTRAFFIC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTTRAFFIC, encoded as an ASN.1 Element.
 */
export
function _encode_CTTRAFFIC (value: CTTRAFFIC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTTRAFFIC) { _cached_encoder_for_CTTRAFFIC = function (value: CTTRAFFIC, elGetter: $.ASN1Encoder<CTTRAFFIC>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, CTTRAFFIC._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LIIDType, $.BER)(value.lIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.correspondentCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.iRITransactionNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.trafficPacket, $.BER);
    if (value.cryptoChecksum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBitString, $.BER)(value.cryptoChecksum, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTTRAFFIC(value, elGetter);
}


/* eslint-enable */
