/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallType, _decode_CallType, _encode_CallType } from "../SS-MCR-Operations-asn97/CallType.ta.mjs";
import { PresentedAddressUnscreened, _decode_PresentedAddressUnscreened, _encode_PresentedAddressUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressUnscreened.ta.mjs";
import { Correlation, _decode_Correlation, _encode_Correlation } from "../SS-MCR-Operations-asn97/Correlation.ta.mjs";
import { MCRExtensions, _decode_MCRExtensions, _encode_MCRExtensions } from "../SS-MCR-Operations-asn97/MCRExtensions.ta.mjs";

/**
 * @summary MCRequestArg
 * @description
 *
 * Argument of `mCRequest` (ECMA-344 §6.3.1, §6.5.1.1.2). The elements are
 * taken from the Requesting User's request. The Co-operating PINX stores
 * `correlation` and `retainOrigCall` before sending SETUP (§6.5.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCRequestArg ::= SEQUENCE {
 *     callType CallType,
 *     retainOrigCall BOOLEAN DEFAULT TRUE,
 *     destinationAddress PresentedAddressUnscreened,
 *     requestingAddress [0] PresentedAddressUnscreened OPTIONAL,
 *     cooperatingAddress [1] PresentedAddressUnscreened OPTIONAL,
 *     correlation Correlation,
 *     extensions MCRExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCRequestArg {
    /**
     * @summary `callType`.
     * @description
     *
     * Basic service of the Requested Call, or a call-independent signalling
     * connection. The Co-operating PINX sets Bearer Capability and Channel
     * Identification from this value (ECMA-344 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly callType: CallType;
    /**
     * @summary `retainOrigCall`.
     * @description
     *
     * Default TRUE, meaning the Original Call stays up. If FALSE, the
     * Co-operating PINX puts the `mCRequest` return result or return error in
     * the first call-clearing message instead of a FACILITY (ECMA-344
     * §6.5.2.1.2, §6.5.2.2.2).
     * @public
     * @readonly
     */
    readonly retainOrigCall: OPTIONAL<BOOLEAN>;
    /**
     * @summary `destinationAddress`.
     * @description
     *
     * Called party of the Requested Call. The Co-operating PINX copies it into
     * the Called Party information element of SETUP (ECMA-344 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly destinationAddress: PresentedAddressUnscreened;
    /**
     * @summary `requestingAddress`.
     * @description
     *
     * Address of the Requesting User. Copied into `mCInform` when present
     * (ECMA-344 §6.5.2.1.2). §6.5 is silent on when to omit it.
     * @public
     * @readonly
     */
    readonly requestingAddress: OPTIONAL<PresentedAddressUnscreened>;
    /**
     * @summary `cooperatingAddress`.
     * @description
     *
     * Address of the Co-operating User. Copied into `mCInform`. Required when
     * `mCRequest` is sent on a new call-independent signalling connection
     * (ECMA-344 §6.5.1.1.2 NOTE). On an existing call reference the
     * Co-operating User is the user served on that reference.
     * @public
     * @readonly
     */
    readonly cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>;
    /**
     * @summary `correlation`.
     * @description
     *
     * Ties the Original Call to the Requested Call (ECMA-344 §4.2.6, §4.2.7).
     * Stored by the Co-operating PINX and copied into `mCInform` and
     * `mCAlerting` (§6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly correlation: Correlation;
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in
     * `MakeCallRequestExtension` (ECMA-344 §6.3.1).
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCRExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        callType: CallType,
        retainOrigCall: OPTIONAL<BOOLEAN>,
        destinationAddress: PresentedAddressUnscreened,
        requestingAddress: OPTIONAL<PresentedAddressUnscreened>,
        cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>,
        correlation: Correlation,
        extensions?: OPTIONAL<MCRExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.callType = callType;
        this.retainOrigCall = retainOrigCall;
        this.destinationAddress = destinationAddress;
        this.requestingAddress = requestingAddress;
        this.cooperatingAddress = cooperatingAddress;
        this.correlation = correlation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCRequestArg`.
     * @returns {MCRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (MCRequestArg)]: (MCRequestArg)[_K] }): MCRequestArg {
        return new MCRequestArg(_o.callType, _o.retainOrigCall, _o.destinationAddress, _o.requestingAddress, _o.cooperatingAddress, _o.correlation, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `retainOrigCall`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_retainOrigCall () { return true; }
}

/**
 * @summary The Leading Root Component Types of MCRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callType", false, $.hasAnyTag),
    new $.ComponentSpec("retainOrigCall", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("destinationAddress", false, $.hasAnyTag),
    new $.ComponentSpec("requestingAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cooperatingAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlation", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of MCRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCRequestArg: $.ASN1Decoder<MCRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCRequestArg (el: _Element): MCRequestArg {
    if (!_cached_decoder_for_MCRequestArg) { _cached_decoder_for_MCRequestArg = function (el: _Element): MCRequestArg {
    let callType!: CallType;
    let retainOrigCall: OPTIONAL<BOOLEAN> = MCRequestArg._default_value_for_retainOrigCall;
    let destinationAddress!: PresentedAddressUnscreened;
    let requestingAddress: OPTIONAL<PresentedAddressUnscreened>;
    let cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>;
    let correlation!: Correlation;
    let extensions: OPTIONAL<MCRExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callType": (_el: _Element): void => { callType = _decode_CallType(_el); },
        "retainOrigCall": (_el: _Element): void => { retainOrigCall = $._decodeBoolean(_el); },
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_PresentedAddressUnscreened(_el); },
        "requestingAddress": (_el: _Element): void => { requestingAddress = $._decode_explicit<PresentedAddressUnscreened>(() => _decode_PresentedAddressUnscreened)(_el); },
        "cooperatingAddress": (_el: _Element): void => { cooperatingAddress = $._decode_explicit<PresentedAddressUnscreened>(() => _decode_PresentedAddressUnscreened)(_el); },
        "correlation": (_el: _Element): void => { correlation = _decode_Correlation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCRExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCRequestArg,
        _extension_additions_list_spec_for_MCRequestArg,
        _root_component_type_list_2_spec_for_MCRequestArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCRequestArg(
        callType,
        retainOrigCall,
        destinationAddress,
        requestingAddress,
        cooperatingAddress,
        correlation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCRequestArg(el);
}

let _cached_encoder_for_MCRequestArg: $.ASN1Encoder<MCRequestArg> | null = null;

/**
 * @summary Encodes a(n) MCRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCRequestArg (value: MCRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCRequestArg) { _cached_encoder_for_MCRequestArg = function (value: MCRequestArg, _elGetter: $.ASN1Encoder<MCRequestArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_CallType(value.callType, $.BER);
    if (value.retainOrigCall !== undefined && !$.deepEq(value.retainOrigCall, MCRequestArg._default_value_for_retainOrigCall)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.retainOrigCall, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_PresentedAddressUnscreened(value.destinationAddress, $.BER);
    if (value.requestingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PresentedAddressUnscreened, $.BER)(value.requestingAddress, $.BER);
    }
    if (value.cooperatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedAddressUnscreened, $.BER)(value.cooperatingAddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_Correlation(value.correlation, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCRExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCRequestArg(value, elGetter);
}

/* eslint-enable */
