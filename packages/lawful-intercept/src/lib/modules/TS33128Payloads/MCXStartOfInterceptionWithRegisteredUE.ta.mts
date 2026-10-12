/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
// export { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary MCXStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXStartOfInterceptionWithRegisteredUE ::= SEQUENCE
 * {
 *     mCServiceIdentities            [1] SEQUENCE SIZE (1..MAX) OF MCServiceIdentity,
 *     userOnline                     [2] BOOLEAN,
 *     sIPRegistrationRequest         [3] SIPMessage,
 *     sIPRegistrationResponse        [4] SIPMessage,
 *     location                       [5] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MCXStartOfInterceptionWithRegisteredUE {
    /**
     * @summary `mCServiceIdentities`.
     * @public
     * @readonly
     */
    readonly mCServiceIdentities: MCServiceIdentity[];
    /**
     * @summary `userOnline`.
     * @public
     * @readonly
     */
    readonly userOnline: BOOLEAN;
    /**
     * @summary `sIPRegistrationRequest`.
     * @public
     * @readonly
     */
    readonly sIPRegistrationRequest: SIPMessage;
    /**
     * @summary `sIPRegistrationResponse`.
     * @public
     * @readonly
     */
    readonly sIPRegistrationResponse: SIPMessage;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIdentities: MCServiceIdentity[],
        userOnline: BOOLEAN,
        sIPRegistrationRequest: SIPMessage,
        sIPRegistrationResponse: SIPMessage,
        location: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIdentities = mCServiceIdentities;
        this.userOnline = userOnline;
        this.sIPRegistrationRequest = sIPRegistrationRequest;
        this.sIPRegistrationResponse = sIPRegistrationResponse;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXStartOfInterceptionWithRegisteredUE
     * @description
     * 
     * This takes an `object` and converts it to a `MCXStartOfInterceptionWithRegisteredUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXStartOfInterceptionWithRegisteredUE`.
     * @returns {MCXStartOfInterceptionWithRegisteredUE}
     */
    public static _from_object (_o: { [_K in keyof (MCXStartOfInterceptionWithRegisteredUE)]: (MCXStartOfInterceptionWithRegisteredUE)[_K] }): MCXStartOfInterceptionWithRegisteredUE {
        return new MCXStartOfInterceptionWithRegisteredUE(_o.mCServiceIdentities, _o.userOnline, _o.sIPRegistrationRequest, _o.sIPRegistrationResponse, _o.location, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("userOnline", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sIPRegistrationRequest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sIPRegistrationResponse", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MCXStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXStartOfInterceptionWithRegisteredUE: $.ASN1Decoder<MCXStartOfInterceptionWithRegisteredUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXStartOfInterceptionWithRegisteredUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXStartOfInterceptionWithRegisteredUE (el: _Element): MCXStartOfInterceptionWithRegisteredUE {
    if (!_cached_decoder_for_MCXStartOfInterceptionWithRegisteredUE) { _cached_decoder_for_MCXStartOfInterceptionWithRegisteredUE = function (el: _Element): MCXStartOfInterceptionWithRegisteredUE {
    let mCServiceIdentities!: MCServiceIdentity[];
    let userOnline!: BOOLEAN;
    let sIPRegistrationRequest!: SIPMessage;
    let sIPRegistrationResponse!: SIPMessage;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceIdentities": (_el: _Element): void => {
            mCServiceIdentities = $._decode_implicit<MCServiceIdentity[]>(() => $._decodeSequenceOf<MCServiceIdentity>(() => _decode_MCServiceIdentity))(_el);
            if (mCServiceIdentities.length < 1) {
                throw new ASN1SizeError("MCXStartOfInterceptionWithRegisteredUE.mCServiceIdentities violates SIZE constraint");
            }
        },
        "userOnline": (_el: _Element): void => { userOnline = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sIPRegistrationRequest": (_el: _Element): void => { sIPRegistrationRequest = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); },
        "sIPRegistrationResponse": (_el: _Element): void => { sIPRegistrationResponse = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCXStartOfInterceptionWithRegisteredUE,
        _extension_additions_list_spec_for_MCXStartOfInterceptionWithRegisteredUE,
        _root_component_type_list_2_spec_for_MCXStartOfInterceptionWithRegisteredUE,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCXStartOfInterceptionWithRegisteredUE(
        mCServiceIdentities,
        userOnline,
        sIPRegistrationRequest,
        sIPRegistrationResponse,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCXStartOfInterceptionWithRegisteredUE(el);
}

let _cached_encoder_for_MCXStartOfInterceptionWithRegisteredUE: $.ASN1Encoder<MCXStartOfInterceptionWithRegisteredUE> | null = null;

/**
 * @summary Encodes a(n) MCXStartOfInterceptionWithRegisteredUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXStartOfInterceptionWithRegisteredUE, encoded as an ASN.1 Element.
 */
export
function _encode_MCXStartOfInterceptionWithRegisteredUE (value: MCXStartOfInterceptionWithRegisteredUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXStartOfInterceptionWithRegisteredUE) { _cached_encoder_for_MCXStartOfInterceptionWithRegisteredUE = function (value: MCXStartOfInterceptionWithRegisteredUE, elGetter: $.ASN1Encoder<MCXStartOfInterceptionWithRegisteredUE>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MCServiceIdentity>(() => _encode_MCServiceIdentity, $.BER), $.BER)(value.mCServiceIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.userOnline, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SIPMessage, $.BER)(value.sIPRegistrationRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SIPMessage, $.BER)(value.sIPRegistrationResponse, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXStartOfInterceptionWithRegisteredUE(value, elGetter);
}


/* eslint-enable */
