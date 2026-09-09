/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    AutoOriginate,
    _enum_for_AutoOriginate,
    AutoOriginate_prompt /* IMPORTED_LONG_ENUMERATION_ITEM */,
    prompt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AutoOriginate,
    _encode_AutoOriginate
} from "../CSTA-call-control/AutoOriginate.ta.mjs";

import {
    ParticipationType,
    _enum_for_ParticipationType,
    ParticipationType_active /* IMPORTED_LONG_ENUMERATION_ITEM */,
    active /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParticipationType,
    _encode_ParticipationType
} from "../CSTA-device-feature-types/ParticipationType.ta.mjs";

import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary JoinCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JoinCallArgument ::= SEQUENCE
 * {     activeCall             ConnectionID,
 *     joiningDevice             DeviceID,
 *     autoOriginate             [0] IMPLICIT     AutoOriginate         DEFAULT prompt,
 *     participationType         [1] IMPLICIT     ParticipationType     DEFAULT active,
 *     accountCode             [2] IMPLICIT     AccountInfo         OPTIONAL,
 *     authCode             [3] IMPLICIT     AuthCode         OPTIONAL,
 *     correlatorData             [4] IMPLICIT     CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class JoinCallArgument {
    constructor (
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `joiningDevice`.
         * @public
         * @readonly
         */
        readonly joiningDevice: DeviceID,
        /**
         * @summary `autoOriginate`.
         * @public
         * @readonly
         */
        readonly autoOriginate: OPTIONAL<AutoOriginate>,
        /**
         * @summary `participationType`.
         * @public
         * @readonly
         */
        readonly participationType: OPTIONAL<ParticipationType>,
        /**
         * @summary `accountCode`.
         * @public
         * @readonly
         */
        readonly accountCode: OPTIONAL<AccountInfo>,
        /**
         * @summary `authCode`.
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a JoinCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `JoinCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `JoinCallArgument`.
     * @returns {JoinCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (JoinCallArgument)]: (JoinCallArgument)[_K] }): JoinCallArgument {
        return new JoinCallArgument(_o.activeCall, _o.joiningDevice, _o.autoOriginate, _o.participationType, _o.accountCode, _o.authCode, _o.correlatorData, _o.userData, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `autoOriginate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_autoOriginate () { return AutoOriginate_prompt; }
    /**
     * @summary Getter that returns the default value for `participationType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_participationType () { return ParticipationType_active; }        /**
         * @summary The enum used as the type of the component `autoOriginate`
         * @public
         * @static
         */

    public static _enum_for_autoOriginate = _enum_for_AutoOriginate;        /**
         * @summary The enum used as the type of the component `participationType`
         * @public
         * @static
         */

    public static _enum_for_participationType = _enum_for_ParticipationType;
}

/**
 * @summary The Leading Root Component Types of JoinCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_JoinCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("joiningDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("autoOriginate", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("participationType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of JoinCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_JoinCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of JoinCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_JoinCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_JoinCallArgument: $.ASN1Decoder<JoinCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JoinCallArgument (el: _Element): JoinCallArgument {
    if (!_cached_decoder_for_JoinCallArgument) { _cached_decoder_for_JoinCallArgument = function (el: _Element): JoinCallArgument {
    let activeCall!: ConnectionID;
    let joiningDevice!: DeviceID;
    let autoOriginate: OPTIONAL<AutoOriginate> = JoinCallArgument._default_value_for_autoOriginate;
    let participationType: OPTIONAL<ParticipationType> = JoinCallArgument._default_value_for_participationType;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "joiningDevice": (_el: _Element): void => { joiningDevice = _decode_DeviceID(_el); },
        "autoOriginate": (_el: _Element): void => { autoOriginate = $._decode_implicit<AutoOriginate>(() => _decode_AutoOriginate)(_el); },
        "participationType": (_el: _Element): void => { participationType = $._decode_implicit<ParticipationType>(() => _decode_ParticipationType)(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_JoinCallArgument,
        _extension_additions_list_spec_for_JoinCallArgument,
        _root_component_type_list_2_spec_for_JoinCallArgument,
        undefined,
    );
    return new JoinCallArgument(
        activeCall,
        joiningDevice,
        autoOriginate,
        participationType,
        accountCode,
        authCode,
        correlatorData,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_JoinCallArgument(el);
}

let _cached_encoder_for_JoinCallArgument: $.ASN1Encoder<JoinCallArgument> | null = null;

/**
 * @summary Encodes a(n) JoinCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_JoinCallArgument (value: JoinCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JoinCallArgument) { _cached_encoder_for_JoinCallArgument = function (value: JoinCallArgument, elGetter: $.ASN1Encoder<JoinCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.joiningDevice, $.BER),
            /* IF_DEFAULT */ (value.autoOriginate === undefined || $.deepEq(value.autoOriginate, JoinCallArgument._default_value_for_autoOriginate) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AutoOriginate, $.BER)(value.autoOriginate, $.BER)),
            /* IF_DEFAULT */ (value.participationType === undefined || $.deepEq(value.participationType, JoinCallArgument._default_value_for_participationType) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ParticipationType, $.BER)(value.participationType, $.BER)),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_JoinCallArgument(value, elGetter);
}


/* eslint-enable */
