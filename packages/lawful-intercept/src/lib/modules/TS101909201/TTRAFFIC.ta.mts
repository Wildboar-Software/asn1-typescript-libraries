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
 * @summary TTRAFFIC
 * @description
 *
 * `T_TRAFFIC` carries one intercepted IP packet of the target to the
 * Delivery Function across INI3. No response is expected. Used only when
 * IP streams the media (clause 9.1). The packet is a bit-exact copy of
 * the IP packet the operator received. The operator does not interpret
 * it and does not remove user-level compression or encryption
 * (clause 4.4, clause 9.1.2.3.5). If INI3 arrives with network
 * encryption, the LIMF removes that encryption (clause 5.1).
 *
 * The result covers calls the target originates, calls to the target,
 * multi-party calls in which the operator believes the target is taking
 * part, and broadcast calls to a population of which the operator
 * believes the target is a member (clause 9.1.1). The CCIF is in the
 * CMTS and the MG (clause 8.3).
 *
 * `iRITransactionNumber` with `lIInstanceid` correlates this content
 * with the IRI transaction. When both IRI and content are invoked, that
 * correlation is mandatory and delivery is as near real time as possible
 * (clause 4.2.2.3). Transfer across the content service access point
 * should protect integrity and confidentiality and places no
 * retransmission constraint on this record. The security mechanism is
 * pkt-s22, or as modified by clause 8 of TS 101 909-20-2 (clause 9.1.2).
 *
 * Annex A requires ITU-T Recommendation X.680 and the Basic Encoding
 * Rules (ITU-T Recommendation X.690), plus the data-definition rules in
 * annex D of TS 101 671. The module has no extension markers;
 * interceptVersion in the module object identifier is incremented when
 * the published module changes. This document does not define HI3.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 9.1.2.1, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
     * Bit-exact copy of the intercepted IP packet. Clause 9.1.1 says
     * the intercepted packet is embedded in this element; the only
     * embedding rule given is that copy (clause 9.1.2.3.5).
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
