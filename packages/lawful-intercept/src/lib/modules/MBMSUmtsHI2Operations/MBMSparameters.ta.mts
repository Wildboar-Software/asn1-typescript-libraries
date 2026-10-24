/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSparameters
 * @description
 * 
 * Annex B.8 defines an access point name here. Clause 9 tables map the APN to
 * `mBMSapn` on the MBMS information and do not name this type.
 * 
 * 3GPP TS 33.108, annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSparameters ::= SEQUENCE
 * {
 *     aPN                                 [1] UTF8String    type OPTIONAL,
 *     -- The Access Point Name (APN) is coded in accordance with
 *         -- 3GPP TS 24.008 [9] without the APN IEI (only the last 100 octets are used).
 *         -- Octets are coded according to 3GPP TS 23.003 [25].
 *         ...
 * }
 * ```
 * 
 * @class
 */
export
class MBMSparameters {
    /**
     * @summary `aPN`.
     * @description
     * 
     * Access point name coded as in TS 24.008 without the APN
     * information-element identifier; only the last 100 octets are used. Octets
     * are coded according to TS 23.003.
     * 
     * Clause 9 describes that APN as the logical name on which the IP multicast
     * address is defined (TS 23.060) and maps it to `mBMSapn`. TS 33.108 does
     * not say when to use this component instead.
     * 
     * 3GPP TS 33.108, table 9.2 and annex B.8.
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aPN?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aPN = aPN;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MBMSparameters
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSparameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSparameters`.
     * @returns {MBMSparameters}
     */
    public static _from_object (_o: { [_K in keyof (MBMSparameters)]: (MBMSparameters)[_K] }): MBMSparameters {
        return new MBMSparameters(_o.aPN, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MBMSparameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSparameters: $.ComponentSpec[] = [
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MBMSparameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSparameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSparameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSparameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSparameters: $.ASN1Decoder<MBMSparameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSparameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSparameters (el: _Element): MBMSparameters {
    if (!_cached_decoder_for_MBMSparameters) { _cached_decoder_for_MBMSparameters = function (el: _Element): MBMSparameters {
    let aPN: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MBMSparameters,
        _extension_additions_list_spec_for_MBMSparameters,
        _root_component_type_list_2_spec_for_MBMSparameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MBMSparameters(
        aPN,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MBMSparameters(el);
}

let _cached_encoder_for_MBMSparameters: $.ASN1Encoder<MBMSparameters> | null = null;

/**
 * @summary Encodes a(n) MBMSparameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSparameters, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSparameters (value: MBMSparameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSparameters) { _cached_encoder_for_MBMSparameters = function (value: MBMSparameters, elGetter: $.ASN1Encoder<MBMSparameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.aPN, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSparameters(value, elGetter);
}


/* eslint-enable */
