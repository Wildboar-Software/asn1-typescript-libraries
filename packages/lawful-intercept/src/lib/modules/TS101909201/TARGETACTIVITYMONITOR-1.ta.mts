/* eslint-disable */
import {
    type BIT_STRING,
    type INTEGER,
    type OPTIONAL,
    type UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";
// export { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";
import { type LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909201/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909201/LocationType.ta.mjs";
import { DirectionType, _decode_DirectionType, _encode_DirectionType, _enum_for_DirectionType } from "../TS101909201/DirectionType.ta.mjs";
// export { DirectionType, _enum_for_DirectionType, DirectionType_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DirectionType, _encode_DirectionType } from "../TS101909201/DirectionType.ta.mjs";
import { IRITransactionType, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType, _enum_for_IRITransactionType } from "../TS101909201/IRITransactionType.ta.mjs";
// export { IRITransactionType, _enum_for_IRITransactionType, IRITransactionType_iRIbegin /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIbegin /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIcontinue /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIcontinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIend /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIend /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIreport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType } from "../TS101909201/IRITransactionType.ta.mjs";
import { type UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909201/UserSignalType.ta.mjs";
// export { UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909201/UserSignalType.ta.mjs";


/**
 * @summary TARGETACTIVITYMONITOR_1
 * @description
 *
 * `TARGET_ACTIVITY_MONITOR` reports target activity on the IPCablecom
 * network to the LIMF across INI2. The header is who (`lIInstanceid`),
 * when (`timestamp`), and where (`targetLocation`). The body is the
 * signal, its direction, and the IRI transaction it belongs to. No
 * response is expected.
 *
 * By default the IRI record is `iRIreport` and `userSignal` is a
 * bit-exact copy of the signal, with no interpretation (clause 8.4.2).
 * Clause 8.1.1 requires identities that attempted communication with the
 * target and that the target attempted communication with, identities
 * used by or associated with the target, services and their parameters,
 * signals that invoke or modify services, time-stamps, and any diverted
 * directory numbers. Location should also be present. The result applies
 * to every call type for as long as the operator believes the target is
 * a participant.
 *
 * The target service is voice telephony identified by a unique address,
 * for example an E.164 number, inside one IPCablecom domain (clause 1,
 * clause 4.2.2.4). The IRIIF may sit in the CMS, MGC, MG, or CMTS
 * (clause 8.3). Transfer across the IRI service access point should
 * protect integrity and confidentiality and places no retransmission
 * constraint on this record. The security mechanism is pkt-s21 and/or
 * pkt-s23, as modified by clause 8 of TS 101 909-20-2 (clause 8.4.1).
 *
 * Clause 8.4.2 prints a SEQUENCE named `TARGETACTIVITYMONITOR` with
 * `version` default 2 and optional `iRIMessageBER` and `iRIMessageDER`.
 * Annex A, which this type follows, names the type
 * `TARGETACTIVITYMONITOR-1`, defaults `version` to 1, and omits those
 * components.
 *
 * Annex A requires ITU-T Recommendation X.680 and the Basic Encoding
 * Rules (ITU-T Recommendation X.690), plus the data-definition rules in
 * annex D of TS 101 671. The module has no extension markers;
 * interceptVersion in the module object identifier is incremented when
 * the published module changes. The module sits in the ETSI document
 * tree and is not a leaf of the ETSI LI tree in TS 101 671. If INI2
 * arrives at the LIMF in DER, the LIMF decodes it and re-encodes BER
 * for HI2 (clause 5.1). This document does not define HI2.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETACTIVITYMONITOR-1 ::= SEQUENCE {
 *     version                 INTEGER DEFAULT 1, -- header, version -
 *     lIInstanceid            LIIDType, -- header, who -
 *     timestamp               UTCTime, -- header, when -
 *     targetLocation          LocationType, -- header, where -
 *     direction               DirectionType,
 *     iRITransaction          IRITransactionType DEFAULT iRIreport,
 *     iRITransactionNumber    INTEGER,
 *     userSignal              UserSignalType, -- Either copy or interpreted signalling
 *     cryptoCheckSum          BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TARGETACTIVITYMONITOR_1 {
    /**
     * @summary `version`.
     * @description
     *
     * Version of the present document that defines this structure. For
     * the first version the value is 1, which is the annex A default.
     * Clause 8.4.2's prose SEQUENCE defaults the field to 2 because it
     * adds `iRIMessage`; that SEQUENCE is not this type.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.1.
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
     * Header: who. Identifies the LEA, the target, the network operator
     * or service provider, and the warrant reference. Clause 8.4.2.1.2
     * says the management activation flow first returns this tag and
     * cites annex B. Annex B describes CMS-to-LIMF call flows and does
     * not define that activation encoding. The same tag heads
     * `TTRAFFIC` and `CTTRAFFIC`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.2.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly lIInstanceid: LIIDType;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Header: when the interception was made. Mandatory on every IRI
     * record. The note in clause 8.4.2.1.3 says `UTCTime` is derived
     * from Coordinated Universal Time and points at clause 3.1.
     * Clause 3.1 does not define that time base further.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.3.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetLocation`.
     * @description
     *
     * Header: where. Present on every activity indication. The operator
     * provides, to the best of its knowledge, the location the warrant
     * asked for, within the normal operating parameters of the network.
     * Delivered with registration and with the result of interception.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.4.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetLocation: LocationType;
    /**
     * @summary `direction`.
     * @description
     *
     * Whether the signal is to the target, from the target, or unknown,
     * to the best of the operator's knowledge.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly direction: DirectionType;
    /**
     * @summary `iRITransaction`.
     * @description
     *
     * Which IRI record this is. Default `iRIreport`. Begin, continue,
     * and end form one IRI transaction. Report is for an event that is
     * not part of a communication (clause 8.1, table 1). Clause 8.2
     * places a signal in begin, end, or continue when it belongs to the
     * transaction set, and in report when it does not.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.6.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransaction: OPTIONAL<IRITransactionType>;
    /**
     * @summary `iRITransactionNumber`.
     * @description
     *
     * With `lIInstanceid`, identifies one IRI transaction. An
     * `iRIbegin` increments it, and that value stays constant through
     * `iRIcontinue` and the closing `iRIend`. When `iRITransaction` is
     * `iRIreport` this field is 0 and the receiver should ignore it.
     * `TTRAFFIC` and `CTTRAFFIC` copy it so content correlates with
     * this transaction (clause 9.1.2.3.4).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransactionNumber: INTEGER;
    /**
     * @summary `userSignal`.
     * @description
     *
     * The user's signalling transaction. Clause 8.4.2 requires a
     * bit-exact copy and forbids interpretation, which is `copySignal`.
     * The component comment also allows interpreted signalling.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2, clause 8.4.2.1.8.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly userSignal: UserSignalType;
    /**
     * @summary `cryptoCheckSum`.
     * @description
     *
     * Optional cryptographic checksum over the main content of the
     * record. The operator may include it. The mechanism follows the
     * operator's security policy; this document does not name an
     * algorithm.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.9.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly cryptoCheckSum: OPTIONAL<BIT_STRING>;

    constructor (
        version: OPTIONAL<INTEGER>,
        lIInstanceid: LIIDType,
        timestamp: UTCTime,
        targetLocation: LocationType,
        direction: DirectionType,
        iRITransaction: OPTIONAL<IRITransactionType>,
        iRITransactionNumber: INTEGER,
        userSignal: UserSignalType,
        cryptoCheckSum?: OPTIONAL<BIT_STRING>
    ) {
        this.version = version;
        this.lIInstanceid = lIInstanceid;
        this.timestamp = timestamp;
        this.targetLocation = targetLocation;
        this.direction = direction;
        this.iRITransaction = iRITransaction;
        this.iRITransactionNumber = iRITransactionNumber;
        this.userSignal = userSignal;
        this.cryptoCheckSum = cryptoCheckSum;
    }

    /**
     * @summary Restructures an object into a TARGETACTIVITYMONITOR_1
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETACTIVITYMONITOR_1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETACTIVITYMONITOR_1`.
     * @returns {TARGETACTIVITYMONITOR_1}
     */
    public static _from_object (_o: { [_K in keyof (TARGETACTIVITYMONITOR_1)]: (TARGETACTIVITYMONITOR_1)[_K] }): TARGETACTIVITYMONITOR_1 {
        return new TARGETACTIVITYMONITOR_1(_o.version, _o.lIInstanceid, _o.timestamp, _o.targetLocation, _o.direction, _o.iRITransaction, _o.iRITransactionNumber, _o.userSignal, _o.cryptoCheckSum);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return 1; }
    /**
     * @summary Getter that returns the default value for `iRITransaction`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_iRITransaction () { return IRITransactionType_iRIreport; }        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_DirectionType;        /**
         * @summary The enum used as the type of the component `iRITransaction`
         * @public
         * @static
         */

    public static _enum_for_iRITransaction = _enum_for_IRITransactionType;
}

/**
 * @summary The Leading Root Component Types of TARGETACTIVITYMONITOR_1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETACTIVITYMONITOR_1: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIInstanceid", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetLocation", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iRITransaction", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iRITransactionNumber", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userSignal", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cryptoCheckSum", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of TARGETACTIVITYMONITOR_1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETACTIVITYMONITOR_1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETACTIVITYMONITOR_1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETACTIVITYMONITOR_1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETACTIVITYMONITOR_1: $.ASN1Decoder<TARGETACTIVITYMONITOR_1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETACTIVITYMONITOR_1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETACTIVITYMONITOR_1 (el: _Element): TARGETACTIVITYMONITOR_1 {
    if (!_cached_decoder_for_TARGETACTIVITYMONITOR_1) { _cached_decoder_for_TARGETACTIVITYMONITOR_1 = function (el: _Element): TARGETACTIVITYMONITOR_1 {
    let version: OPTIONAL<INTEGER> = TARGETACTIVITYMONITOR_1._default_value_for_version;
    let lIInstanceid!: LIIDType;
    let timestamp!: UTCTime;
    let targetLocation!: LocationType;
    let direction!: DirectionType;
    let iRITransaction: OPTIONAL<IRITransactionType> = TARGETACTIVITYMONITOR_1._default_value_for_iRITransaction;
    let iRITransactionNumber!: INTEGER;
    let userSignal!: UserSignalType;
    let cryptoCheckSum: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeInteger(_el); },
        "lIInstanceid": (_el: _Element): void => { lIInstanceid = _decode_LIIDType(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decodeUTCTime(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = _decode_LocationType(_el); },
        "direction": (_el: _Element): void => { direction = _decode_DirectionType(_el); },
        "iRITransaction": (_el: _Element): void => { iRITransaction = _decode_IRITransactionType(_el); },
        "iRITransactionNumber": (_el: _Element): void => { iRITransactionNumber = $._decodeInteger(_el); },
        "userSignal": (_el: _Element): void => { userSignal = _decode_UserSignalType(_el); },
        "cryptoCheckSum": (_el: _Element): void => { cryptoCheckSum = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TARGETACTIVITYMONITOR_1,
        _extension_additions_list_spec_for_TARGETACTIVITYMONITOR_1,
        _root_component_type_list_2_spec_for_TARGETACTIVITYMONITOR_1,
        undefined,
    );
    return new TARGETACTIVITYMONITOR_1(
        version,
        lIInstanceid,
        timestamp,
        targetLocation,
        direction,
        iRITransaction,
        iRITransactionNumber,
        userSignal,
        cryptoCheckSum
    );
}; }
    return _cached_decoder_for_TARGETACTIVITYMONITOR_1(el);
}

let _cached_encoder_for_TARGETACTIVITYMONITOR_1: $.ASN1Encoder<TARGETACTIVITYMONITOR_1> | null = null;

/**
 * @summary Encodes a(n) TARGETACTIVITYMONITOR_1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETACTIVITYMONITOR_1, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETACTIVITYMONITOR_1 (value: TARGETACTIVITYMONITOR_1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETACTIVITYMONITOR_1) { _cached_encoder_for_TARGETACTIVITYMONITOR_1 = function (value: TARGETACTIVITYMONITOR_1, elGetter: $.ASN1Encoder<TARGETACTIVITYMONITOR_1>): _Element {
    const _components: _Element[] = new Array(9);
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, TARGETACTIVITYMONITOR_1._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LIIDType, $.BER)(value.lIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_LocationType, $.BER)(value.targetLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DirectionType, $.BER)(value.direction, $.BER);
    if (value.iRITransaction !== undefined && !$.deepEq(value.iRITransaction, TARGETACTIVITYMONITOR_1._default_value_for_iRITransaction)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 5, () => _encode_IRITransactionType, $.BER)(value.iRITransaction, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.iRITransactionNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 7, () => _encode_UserSignalType, $.BER)(value.userSignal, $.BER);
    if (value.cryptoCheckSum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBitString, $.BER)(value.cryptoCheckSum, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TARGETACTIVITYMONITOR_1(value, elGetter);
}


/* eslint-enable */
