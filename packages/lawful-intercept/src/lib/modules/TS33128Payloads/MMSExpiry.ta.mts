/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_MMSPeriodFormat, _encode_MMSPeriodFormat, _enum_for_MMSPeriodFormat, MMSPeriodFormat } from "../TS33128Payloads/MMSPeriodFormat.ta.mjs";
// export { MMSPeriodFormat, _enum_for_MMSPeriodFormat, MMSPeriodFormat_absolute /* IMPORTED_LONG_ENUMERATION_ITEM */, absolute /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPeriodFormat_relative /* IMPORTED_LONG_ENUMERATION_ITEM */, relative /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPeriodFormat, _encode_MMSPeriodFormat } from "../TS33128Payloads/MMSPeriodFormat.ta.mjs";


/**
 * @summary MMSExpiry
 * @description
 * 
 * Length of time in seconds the MM will be stored in MMS Proxy-Relay or time to
 * delete the MM Include when sent to the MMS Proxy-Relay (see NOTE).
 *
 * 3GPP TS 33.128, clause 7.4.3.2A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSExpiry ::= SEQUENCE
 * {
 *     expiryPeriod [1] INTEGER,
 *     periodFormat [2] MMSPeriodFormat
 * }
 * ```
 * 
 * @class
 */
export
class MMSExpiry {
    /**
     * @summary `expiryPeriod`.
     * @public
     * @readonly
     */
    readonly expiryPeriod: INTEGER;
    /**
     * @summary `periodFormat`.
     * @public
     * @readonly
     */
    readonly periodFormat: MMSPeriodFormat;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        expiryPeriod: INTEGER,
        periodFormat: MMSPeriodFormat,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.expiryPeriod = expiryPeriod;
        this.periodFormat = periodFormat;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSExpiry
     * @description
     * 
     * This takes an `object` and converts it to a `MMSExpiry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSExpiry`.
     * @returns {MMSExpiry}
     */
    public static _from_object (_o: { [_K in keyof (MMSExpiry)]: (MMSExpiry)[_K] }): MMSExpiry {
        return new MMSExpiry(_o.expiryPeriod, _o.periodFormat, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `periodFormat`
         * @public
         * @static
         */

    public static _enum_for_periodFormat: typeof _enum_for_MMSPeriodFormat = _enum_for_MMSPeriodFormat;
}

/**
 * @summary The Leading Root Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSExpiry: $.ComponentSpec[] = [
    new $.ComponentSpec("expiryPeriod", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("periodFormat", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSExpiry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSExpiry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSExpiry: $.ASN1Decoder<MMSExpiry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSExpiry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSExpiry (el: _Element): MMSExpiry {
    if (!_cached_decoder_for_MMSExpiry) { _cached_decoder_for_MMSExpiry = function (el: _Element): MMSExpiry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSExpiry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "expiryPeriod";
    sequence[1].name = "periodFormat";
    let expiryPeriod!: INTEGER;
    let periodFormat!: MMSPeriodFormat;
    expiryPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    periodFormat = $._decode_implicit<MMSPeriodFormat>(() => _decode_MMSPeriodFormat)(sequence[1]);
    return new MMSExpiry(
        expiryPeriod,
        periodFormat,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MMSExpiry(el);
}

let _cached_encoder_for_MMSExpiry: $.ASN1Encoder<MMSExpiry> | null = null;

/**
 * @summary Encodes a(n) MMSExpiry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSExpiry, encoded as an ASN.1 Element.
 */
export
function _encode_MMSExpiry (value: MMSExpiry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSExpiry) { _cached_encoder_for_MMSExpiry = function (value: MMSExpiry, elGetter: $.ASN1Encoder<MMSExpiry>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.expiryPeriod, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSPeriodFormat, $.BER)(value.periodFormat, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSExpiry(value, elGetter);
}


/* eslint-enable */
