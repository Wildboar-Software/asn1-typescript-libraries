/* eslint-disable */
import {
    BIT_STRING,
    INTEGER,
    OPTIONAL,
    UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";
// export { LIIDType, _decode_LIIDType, _encode_LIIDType } from "../TS101909201/LIIDType.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909201/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../TS101909201/LocationType.ta.mjs";
import { DirectionType, _decode_DirectionType, _encode_DirectionType, _enum_for_DirectionType } from "../TS101909201/DirectionType.ta.mjs";
// export { DirectionType, _enum_for_DirectionType, DirectionType_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, DirectionType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DirectionType, _encode_DirectionType } from "../TS101909201/DirectionType.ta.mjs";
import { IRITransactionType, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType, _enum_for_IRITransactionType } from "../TS101909201/IRITransactionType.ta.mjs";
// export { IRITransactionType, _enum_for_IRITransactionType, IRITransactionType_iRIbegin /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIbegin /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIcontinue /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIcontinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIend /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIend /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRITransactionType_iRIreport /* IMPORTED_LONG_ENUMERATION_ITEM */, iRIreport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRITransactionType, _encode_IRITransactionType } from "../TS101909201/IRITransactionType.ta.mjs";
import { UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909201/UserSignalType.ta.mjs";
// export { UserSignalType, _decode_UserSignalType, _encode_UserSignalType } from "../TS101909201/UserSignalType.ta.mjs";


/**
 * @summary TARGETACTIVITYMONITOR_1
 * @description
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
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<INTEGER>;
    /**
     * @summary `lIInstanceid`.
     * @public
     * @readonly
     */
    readonly lIInstanceid: LIIDType;
    /**
     * @summary `timestamp`.
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: LocationType;
    /**
     * @summary `direction`.
     * @public
     * @readonly
     */
    readonly direction: DirectionType;
    /**
     * @summary `iRITransaction`.
     * @public
     * @readonly
     */
    readonly iRITransaction: OPTIONAL<IRITransactionType>;
    /**
     * @summary `iRITransactionNumber`.
     * @public
     * @readonly
     */
    readonly iRITransactionNumber: INTEGER;
    /**
     * @summary `userSignal`.
     * @public
     * @readonly
     */
    readonly userSignal: UserSignalType;
    /**
     * @summary `cryptoCheckSum`.
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
        cryptoCheckSum: OPTIONAL<BIT_STRING>
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
