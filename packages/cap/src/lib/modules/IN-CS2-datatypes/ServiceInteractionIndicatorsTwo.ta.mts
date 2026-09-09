/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ForwardServiceInteractionInd, _decode_ForwardServiceInteractionInd, _encode_ForwardServiceInteractionInd } from "../IN-CS2-datatypes/ForwardServiceInteractionInd.ta.mjs";
// export { ForwardServiceInteractionInd, _decode_ForwardServiceInteractionInd, _encode_ForwardServiceInteractionInd } from "../IN-CS2-datatypes/ForwardServiceInteractionInd.ta.mjs";
import { BackwardServiceInteractionInd, _decode_BackwardServiceInteractionInd, _encode_BackwardServiceInteractionInd } from "../IN-CS2-datatypes/BackwardServiceInteractionInd.ta.mjs";
// export { BackwardServiceInteractionInd, _decode_BackwardServiceInteractionInd, _encode_BackwardServiceInteractionInd } from "../IN-CS2-datatypes/BackwardServiceInteractionInd.ta.mjs";
import { BothwayThroughConnectionInd, _enum_for_BothwayThroughConnectionInd, BothwayThroughConnectionInd_bothwayPathRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, BothwayThroughConnectionInd_bothwayPathNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BothwayThroughConnectionInd, _encode_BothwayThroughConnectionInd } from "../IN-CS2-datatypes/BothwayThroughConnectionInd.ta.mjs";
// export { BothwayThroughConnectionInd, _enum_for_BothwayThroughConnectionInd, BothwayThroughConnectionInd_bothwayPathRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, BothwayThroughConnectionInd_bothwayPathNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BothwayThroughConnectionInd, _encode_BothwayThroughConnectionInd } from "../IN-CS2-datatypes/BothwayThroughConnectionInd.ta.mjs";
import { SuspendTimer, _decode_SuspendTimer, _encode_SuspendTimer } from "../IN-CS2-datatypes/SuspendTimer.ta.mjs";
// export { SuspendTimer, _decode_SuspendTimer, _encode_SuspendTimer } from "../IN-CS2-datatypes/SuspendTimer.ta.mjs";
import { ConnectedNumberTreatmentInd, _enum_for_ConnectedNumberTreatmentInd, ConnectedNumberTreatmentInd_noINImpact /* IMPORTED_LONG_ENUMERATION_ITEM */, noINImpact /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentationRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, presentationRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentCalledINNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, presentCalledINNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectedNumberTreatmentInd, _encode_ConnectedNumberTreatmentInd } from "../IN-CS2-datatypes/ConnectedNumberTreatmentInd.ta.mjs";
// export { ConnectedNumberTreatmentInd, _enum_for_ConnectedNumberTreatmentInd, ConnectedNumberTreatmentInd_noINImpact /* IMPORTED_LONG_ENUMERATION_ITEM */, noINImpact /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentationRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, presentationRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentCalledINNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, presentCalledINNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectedNumberTreatmentInd, _encode_ConnectedNumberTreatmentInd } from "../IN-CS2-datatypes/ConnectedNumberTreatmentInd.ta.mjs";


/**
 * @summary ServiceInteractionIndicatorsTwo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicatorsTwo ::= SEQUENCE {
 *   forwardServiceInteractionInd       [0]  ForwardServiceInteractionInd OPTIONAL,
 *   -- applicable to operations IDP, CON, ICA.
 *   backwardServiceInteractionInd
 *     [1]  BackwardServiceInteractionInd OPTIONAL,
 *   -- applicable to operations IDP, CON, CTR, ETC.
 *   bothwayThroughConnectionInd        [2]  BothwayThroughConnectionInd OPTIONAL,
 *   -- applicable to operations CTR, ETC.
 *   suspendTimer                       [3]  SuspendTimer OPTIONAL,
 *   -- applicable to operations CON, ICA.
 *   connectedNumberTreatmentInd        [4]  ConnectedNumberTreatmentInd OPTIONAL,
 *   -- applicable to operations CON, CTR, ETC.
 *   suppressCallDiversionNotification  [5]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA
 *   suppressCallTransferNotification   [6]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA
 *   allowCdINNoPresentationInd         [7]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA
 *   -- indicates whether the Number Presentation not allowed indicator of the ISUP
 *   -- "called IN number" shall be set to presentation allowed (TRUE) or presentation not allowed (FALSE)
 *   userDialogueDurationInd            [8]  BOOLEAN DEFAULT TRUE,
 *   -- applicable when interaction with the user is required, if the interaction
 *   -- TRUE means the user interaction may last longer than 90 seconds. Otherwise the
 *   -- indicator should be set to FALSE.
 *   -- used for delaying ISUP T9 timer.
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceInteractionIndicatorsTwo {
    constructor (
        /**
         * @summary `forwardServiceInteractionInd`.
         * @public
         * @readonly
         */
        readonly forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>,
        /**
         * @summary `backwardServiceInteractionInd`.
         * @public
         * @readonly
         */
        readonly backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>,
        /**
         * @summary `bothwayThroughConnectionInd`.
         * @public
         * @readonly
         */
        readonly bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>,
        /**
         * @summary `suspendTimer`.
         * @public
         * @readonly
         */
        readonly suspendTimer: OPTIONAL<SuspendTimer>,
        /**
         * @summary `connectedNumberTreatmentInd`.
         * @public
         * @readonly
         */
        readonly connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>,
        /**
         * @summary `suppressCallDiversionNotification`.
         * @public
         * @readonly
         */
        readonly suppressCallDiversionNotification: OPTIONAL<BOOLEAN>,
        /**
         * @summary `suppressCallTransferNotification`.
         * @public
         * @readonly
         */
        readonly suppressCallTransferNotification: OPTIONAL<BOOLEAN>,
        /**
         * @summary `allowCdINNoPresentationInd`.
         * @public
         * @readonly
         */
        readonly allowCdINNoPresentationInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary `userDialogueDurationInd`.
         * @public
         * @readonly
         */
        readonly userDialogueDurationInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceInteractionIndicatorsTwo
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceInteractionIndicatorsTwo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceInteractionIndicatorsTwo`.
     * @returns {ServiceInteractionIndicatorsTwo}
     */
    public static _from_object (_o: { [_K in keyof (ServiceInteractionIndicatorsTwo)]: (ServiceInteractionIndicatorsTwo)[_K] }): ServiceInteractionIndicatorsTwo {
        return new ServiceInteractionIndicatorsTwo(_o.forwardServiceInteractionInd, _o.backwardServiceInteractionInd, _o.bothwayThroughConnectionInd, _o.suspendTimer, _o.connectedNumberTreatmentInd, _o.suppressCallDiversionNotification, _o.suppressCallTransferNotification, _o.allowCdINNoPresentationInd, _o.userDialogueDurationInd, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `userDialogueDurationInd`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_userDialogueDurationInd () { return true; }        /**
         * @summary The enum used as the type of the component `bothwayThroughConnectionInd`
         * @public
         * @static
         */

    public static _enum_for_bothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;        /**
         * @summary The enum used as the type of the component `connectedNumberTreatmentInd`
         * @public
         * @static
         */

    public static _enum_for_connectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
}

/**
 * @summary The Leading Root Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("backwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("bothwayThroughConnectionInd", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("suspendTimer", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("connectedNumberTreatmentInd", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("suppressCallDiversionNotification", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("suppressCallTransferNotification", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("allowCdINNoPresentationInd", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("userDialogueDurationInd", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Decoder<ServiceInteractionIndicatorsTwo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInteractionIndicatorsTwo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInteractionIndicatorsTwo (el: _Element): ServiceInteractionIndicatorsTwo {
    if (!_cached_decoder_for_ServiceInteractionIndicatorsTwo) { _cached_decoder_for_ServiceInteractionIndicatorsTwo = function (el: _Element): ServiceInteractionIndicatorsTwo {
    let forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>;
    let backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>;
    let bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>;
    let suspendTimer: OPTIONAL<SuspendTimer>;
    let connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>;
    let suppressCallDiversionNotification: OPTIONAL<BOOLEAN>;
    let suppressCallTransferNotification: OPTIONAL<BOOLEAN>;
    let allowCdINNoPresentationInd: OPTIONAL<BOOLEAN>;
    let userDialogueDurationInd: OPTIONAL<BOOLEAN> = ServiceInteractionIndicatorsTwo._default_value_for_userDialogueDurationInd;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "forwardServiceInteractionInd": (_el: _Element): void => { forwardServiceInteractionInd = $._decode_implicit<ForwardServiceInteractionInd>(() => _decode_ForwardServiceInteractionInd)(_el); },
        "backwardServiceInteractionInd": (_el: _Element): void => { backwardServiceInteractionInd = $._decode_implicit<BackwardServiceInteractionInd>(() => _decode_BackwardServiceInteractionInd)(_el); },
        "bothwayThroughConnectionInd": (_el: _Element): void => { bothwayThroughConnectionInd = $._decode_implicit<BothwayThroughConnectionInd>(() => _decode_BothwayThroughConnectionInd)(_el); },
        "suspendTimer": (_el: _Element): void => { suspendTimer = $._decode_implicit<SuspendTimer>(() => _decode_SuspendTimer)(_el); },
        "connectedNumberTreatmentInd": (_el: _Element): void => { connectedNumberTreatmentInd = $._decode_implicit<ConnectedNumberTreatmentInd>(() => _decode_ConnectedNumberTreatmentInd)(_el); },
        "suppressCallDiversionNotification": (_el: _Element): void => { suppressCallDiversionNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "suppressCallTransferNotification": (_el: _Element): void => { suppressCallTransferNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "allowCdINNoPresentationInd": (_el: _Element): void => { allowCdINNoPresentationInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "userDialogueDurationInd": (_el: _Element): void => { userDialogueDurationInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo,
        _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo,
        _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceInteractionIndicatorsTwo(
        forwardServiceInteractionInd,
        backwardServiceInteractionInd,
        bothwayThroughConnectionInd,
        suspendTimer,
        connectedNumberTreatmentInd,
        suppressCallDiversionNotification,
        suppressCallTransferNotification,
        allowCdINNoPresentationInd,
        userDialogueDurationInd,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceInteractionIndicatorsTwo(el);
}

let _cached_encoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Encoder<ServiceInteractionIndicatorsTwo> | null = null;

/**
 * @summary Encodes a(n) ServiceInteractionIndicatorsTwo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInteractionIndicatorsTwo, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInteractionIndicatorsTwo (value: ServiceInteractionIndicatorsTwo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInteractionIndicatorsTwo) { _cached_encoder_for_ServiceInteractionIndicatorsTwo = function (value: ServiceInteractionIndicatorsTwo, elGetter: $.ASN1Encoder<ServiceInteractionIndicatorsTwo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.forwardServiceInteractionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ForwardServiceInteractionInd, $.BER)(value.forwardServiceInteractionInd, $.BER)),
            /* IF_ABSENT  */ ((value.backwardServiceInteractionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BackwardServiceInteractionInd, $.BER)(value.backwardServiceInteractionInd, $.BER)),
            /* IF_ABSENT  */ ((value.bothwayThroughConnectionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BothwayThroughConnectionInd, $.BER)(value.bothwayThroughConnectionInd, $.BER)),
            /* IF_ABSENT  */ ((value.suspendTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SuspendTimer, $.BER)(value.suspendTimer, $.BER)),
            /* IF_ABSENT  */ ((value.connectedNumberTreatmentInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectedNumberTreatmentInd, $.BER)(value.connectedNumberTreatmentInd, $.BER)),
            /* IF_ABSENT  */ ((value.suppressCallDiversionNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.suppressCallDiversionNotification, $.BER)),
            /* IF_ABSENT  */ ((value.suppressCallTransferNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.suppressCallTransferNotification, $.BER)),
            /* IF_ABSENT  */ ((value.allowCdINNoPresentationInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.allowCdINNoPresentationInd, $.BER)),
            /* IF_DEFAULT */ (value.userDialogueDurationInd === undefined || $.deepEq(value.userDialogueDurationInd, ServiceInteractionIndicatorsTwo._default_value_for_userDialogueDurationInd) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.userDialogueDurationInd, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceInteractionIndicatorsTwo(value, elGetter);
}


/* eslint-enable */
