/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationUEInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationUEInformation ::= SEQUENCE
 * {
 *     deviceVendor [1] UTF8String,
 *     deviceType   [2] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class ApplicationUEInformation {
    /**
     * @summary `deviceVendor`.
     * @description
     *
     * Indicates the device vendor of the terminal device requesting the root
     * application (see TS 24.392 [166] clause 6.2.1.2.1).
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly deviceVendor: UTF8String;
    /**
     * @summary `deviceType`.
     * @description
     *
     * Indicates the model fo the terminal device requesting the root
     * application (see TS 24.392 [166] clause 6.2.1.2.1).
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     *
     * @public
     * @readonly
     */
    readonly deviceType: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        deviceVendor: UTF8String,
        deviceType: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.deviceVendor = deviceVendor;
        this.deviceType = deviceType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ApplicationUEInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationUEInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationUEInformation`.
     * @returns {ApplicationUEInformation}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationUEInformation)]: (ApplicationUEInformation)[_K] }): ApplicationUEInformation {
        return new ApplicationUEInformation(_o.deviceVendor, _o.deviceType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ApplicationUEInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationUEInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceVendor", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ApplicationUEInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationUEInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationUEInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationUEInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationUEInformation: $.ASN1Decoder<ApplicationUEInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationUEInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationUEInformation (el: _Element): ApplicationUEInformation {
    if (!_cached_decoder_for_ApplicationUEInformation) { _cached_decoder_for_ApplicationUEInformation = function (el: _Element): ApplicationUEInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ApplicationUEInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "deviceVendor";
    sequence[1].name = "deviceType";
    let deviceVendor!: UTF8String;
    let deviceType!: UTF8String;
    deviceVendor = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    deviceType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    return new ApplicationUEInformation(
        deviceVendor,
        deviceType,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ApplicationUEInformation(el);
}

let _cached_encoder_for_ApplicationUEInformation: $.ASN1Encoder<ApplicationUEInformation> | null = null;

/**
 * @summary Encodes a(n) ApplicationUEInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationUEInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationUEInformation (value: ApplicationUEInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationUEInformation) { _cached_encoder_for_ApplicationUEInformation = function (value: ApplicationUEInformation, elGetter: $.ASN1Encoder<ApplicationUEInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.deviceVendor, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.deviceType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ApplicationUEInformation(value, elGetter);
}


/* eslint-enable */
