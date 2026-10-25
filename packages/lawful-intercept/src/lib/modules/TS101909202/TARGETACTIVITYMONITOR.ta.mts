/* eslint-disable */
import {
    type BIT_STRING,
    type INTEGER,
    type OPTIONAL,
    type UTCTime,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909202/LIIDType.ta.mjs";
// export { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909202/LIIDType.ta.mjs";
import { type LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909202/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909202/LocationType.ta.mjs";
import { DirectionType, _decode_DirectionType, _encode_DirectionType, _enum_for_DirectionType } from "../TS101909202/DirectionType.ta.mjs";
// export { DirectionType, _enum_for_DirectionType, DirectionType_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DirectionType, _encode_DirectionType } from "../TS101909202/DirectionType.ta.mjs";
import { IRITransactionType, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType, _enum_for_IRITransactionType } from "../TS101909202/IRITransactionType.ta.mjs";
// export { IRITransactionType, _enum_for_IRITransactionType, IRITransactionType_iRIbegin /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIbegin /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIcontinue /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIcontinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIend /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIend /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIreport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType } from "../TS101909202/IRITransactionType.ta.mjs";
import { type UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909202/UserSignalType.ta.mjs";
// export { UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909202/UserSignalType.ta.mjs";


/**
 * @summary TARGETACTIVITYMONITOR
 * @description
 *
 * `TARGET_ACTIVITY_MONITOR` carries the target's activity on the IPCablecom
 * network to the LIMF across INI2. The header is who (`lIInstanceid`), when
 * (`timestamp`), and where (`targetLocation`). The body is the signal and the
 * IRI transaction it belongs to. No response is expected.
 *
 * By default the record is an IRI-Report and `userSignal` is a bit-exact copy
 * of the signal, with no interpretation.
 *
 * The IRI record shall contain identities that attempted communication with
 * the target, successful or not; identities the target attempted communication
 * with, successful or not; identities used by or associated with the target;
 * services used and their parameters; signals from the target that invoke
 * additional or modified services; time-stamps for the beginning, end, and
 * duration of the connection; and the actual destination and intermediate
 * directory numbers if the call was diverted. It should also contain location.
 * The result applies to all call types while, to the operator's knowledge, the
 * target is a participant (clause 6.1.1).
 *
 * Annex A requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; `interceptVersion` in the
 * module object identifier is incremented when the published module changes.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2, clause 6.1.1, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETACTIVITYMONITOR ::= SEQUENCE {
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
class TARGETACTIVITYMONITOR {
    /**
     * @summary `version`.
     * @description
     *
     * Version of this document that the structure is defined against. This
     * first edition uses 1. Increment by 1 when ASN.1 parameters are added or
     * existing parameters are modified.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.1.
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
     * Header: who. The interception this activity belongs to. The same value
     * is used on the corresponding content records.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.2.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly lIInstanceid: LIIDType;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Header: when. Mandatory time of the interception. `UTCTime` follows
     * Coordinated Universal Time. Clause 3.1 defines that scale as the one
     * maintained by the Bureau International de l'Heure, citing ITU-T
     * Recommendation 460-2 of the CCIR.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.3, clause 3.1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetLocation`.
     * @description
     *
     * Header: where. Supplied on every activity record. Delivered with
     * registration, with the result of interception, or both, for location the
     * warrant asks for and that the network normally has.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.4.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetLocation: LocationType;
    /**
     * @summary `direction`.
     * @description
     *
     * Whether the signal is to the target or from the target, to the
     * operator's knowledge.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly direction: DirectionType;
    /**
     * @summary `iRITransaction`.
     * @description
     *
     * Which kind of IRI record this is. Defaults to `iRIreport`. The record
     * shall say whether it belongs to an IRI transaction and, if so, which
     * point in that transaction. Begin, continue, and end form one
     * transaction; report is for events outside a communication (clause 6.1,
     * table 2).
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.6, clause 6.1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransaction: OPTIONAL<IRITransactionType>;
    /**
     * @summary `iRITransactionNumber`.
     * @description
     *
     * With `lIInstanceid`, identifies one IRI transaction. `iRIbegin`
     * increments it; `iRIcontinue` and `iRIend` keep that value. For
     * `iRIreport` it shall be zero and the receiver should ignore it. The
     * same number is placed on the content packets so the intercepted
     * signalling and the related traffic can be correlated.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRITransactionNumber: INTEGER;
    /**
     * @summary `userSignal`.
     * @description
     *
     * The intercepted user signalling, either copied or interpreted. By
     * default it is a bit-exact copy and no interpretation is attempted.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2, clause 6.4.2.1.8.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     *
     * @public
     * @readonly
     */
    readonly userSignal: UserSignalType;
    /**
     * @summary `cryptoCheckSum`.
     * @description
     *
     * Optional cryptographic checksum over the main content of the record.
     * The operator may include it so the integrity of the intercepted data
     * can be checked. The mechanism should follow the operator's security
     * policy. This document does not name an algorithm. Spelled
     * `cryptoChecksum` on `TTRAFFIC` and `CTTRAFFIC`.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.9.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
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
     * @summary Restructures an object into a TARGETACTIVITYMONITOR
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETACTIVITYMONITOR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETACTIVITYMONITOR`.
     * @returns {TARGETACTIVITYMONITOR}
     */
    public static _from_object (_o: { [_K in keyof (TARGETACTIVITYMONITOR)]: (TARGETACTIVITYMONITOR)[_K] }): TARGETACTIVITYMONITOR {
        return new TARGETACTIVITYMONITOR(_o.version, _o.lIInstanceid, _o.timestamp, _o.targetLocation, _o.direction, _o.iRITransaction, _o.iRITransactionNumber, _o.userSignal, _o.cryptoCheckSum);
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
    public static get _default_value_for_iRITransaction (): _enum_for_IRITransactionType.iRIreport { return IRITransactionType_iRIreport; }        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction: typeof _enum_for_DirectionType = _enum_for_DirectionType;        /**
         * @summary The enum used as the type of the component `iRITransaction`
         * @public
         * @static
         */

    public static _enum_for_iRITransaction: typeof _enum_for_IRITransactionType = _enum_for_IRITransactionType;
}

/**
 * @summary The Leading Root Component Types of TARGETACTIVITYMONITOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETACTIVITYMONITOR: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of TARGETACTIVITYMONITOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETACTIVITYMONITOR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETACTIVITYMONITOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETACTIVITYMONITOR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETACTIVITYMONITOR: $.ASN1Decoder<TARGETACTIVITYMONITOR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETACTIVITYMONITOR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETACTIVITYMONITOR (el: _Element): TARGETACTIVITYMONITOR {
    if (!_cached_decoder_for_TARGETACTIVITYMONITOR) { _cached_decoder_for_TARGETACTIVITYMONITOR = function (el: _Element): TARGETACTIVITYMONITOR {
    let version: OPTIONAL<INTEGER> = TARGETACTIVITYMONITOR._default_value_for_version;
    let lIInstanceid!: LIIDType;
    let timestamp!: UTCTime;
    let targetLocation!: LocationType;
    let direction!: DirectionType;
    let iRITransaction: OPTIONAL<IRITransactionType> = TARGETACTIVITYMONITOR._default_value_for_iRITransaction;
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
        _root_component_type_list_1_spec_for_TARGETACTIVITYMONITOR,
        _extension_additions_list_spec_for_TARGETACTIVITYMONITOR,
        _root_component_type_list_2_spec_for_TARGETACTIVITYMONITOR,
        undefined,
    );
    return new TARGETACTIVITYMONITOR(
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
    return _cached_decoder_for_TARGETACTIVITYMONITOR(el);
}

let _cached_encoder_for_TARGETACTIVITYMONITOR: $.ASN1Encoder<TARGETACTIVITYMONITOR> | null = null;

/**
 * @summary Encodes a(n) TARGETACTIVITYMONITOR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETACTIVITYMONITOR, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETACTIVITYMONITOR (value: TARGETACTIVITYMONITOR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETACTIVITYMONITOR) { _cached_encoder_for_TARGETACTIVITYMONITOR = function (value: TARGETACTIVITYMONITOR, elGetter: $.ASN1Encoder<TARGETACTIVITYMONITOR>): _Element {
    const _components: _Element[] = new Array(9);
    let _components_i = 0;
    if (value.version !== undefined && !$.deepEq(value.version, TARGETACTIVITYMONITOR._default_value_for_version)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LIIDType, $.BER)(value.lIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_LocationType, $.BER)(value.targetLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DirectionType, $.BER)(value.direction, $.BER);
    if (value.iRITransaction !== undefined && !$.deepEq(value.iRITransaction, TARGETACTIVITYMONITOR._default_value_for_iRITransaction)) {
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
    return _cached_encoder_for_TARGETACTIVITYMONITOR(value, elGetter);
}


/* eslint-enable */
