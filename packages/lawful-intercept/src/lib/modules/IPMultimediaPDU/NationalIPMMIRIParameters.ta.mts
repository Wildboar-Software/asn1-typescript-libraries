/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type PrintableString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NationalIPMMIRIParameters
 * @description
 *
 * National IP multimedia IRI parameters. Carried as the
 * `nationalIPMMIRIParameters` alternative of `IPIRIContents` and
 * delivered as an IRI-REPORT record.
 *
 * `countryCode` names the country to which parameters after the
 * extension marker apply. A country that needs further parameters
 * defines them in ASN.1 and adds them after that marker. The module
 * recommends a version parameter and a vendor identification (vendor
 * identifications are taken from IANA), and recommends avoiding tags
 * 240 to 255.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NationalIPMMIRIParameters ::= SEQUENCE
 * {
 *     countryCode                 [1] PrintableString (SIZE (2)),
 *         -- Country Code according to ISO 3166-1 [20],
 *         -- the country to which the parameters inserted after the extension marker apply.
 *     ...
 *     -- In case a given country wants to use additional national parameters according to its law,
 *     -- these national parameters should be defined using the ASN.1 syntax and added after the
 *     -- extension marker (...).
 *     -- It is recommended that "version parameter" and "vendor identification parameter" are
 *     -- included in the national parameters definition. Vendor identifications can be
 *     -- retrieved from the IANA web site. Besides, it is recommended
 *     -- to avoid using tags from 240 to 255 in a formal type definition.
 * }
 * ```
 * 
 * @class
 */
export
class NationalIPMMIRIParameters {
    /**
     * @summary `countryCode`.
     * @description
     *
     * ISO 3166-1 country code, two characters. It identifies the
     * country whose national parameters, if any, follow the extension
     * marker.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
     *
     * @public
     * @readonly
     */
    readonly countryCode: PrintableString;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        countryCode: PrintableString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.countryCode = countryCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NationalIPMMIRIParameters
     * @description
     * 
     * This takes an `object` and converts it to a `NationalIPMMIRIParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NationalIPMMIRIParameters`.
     * @returns {NationalIPMMIRIParameters}
     */
    public static _from_object (_o: { [_K in keyof (NationalIPMMIRIParameters)]: (NationalIPMMIRIParameters)[_K] }): NationalIPMMIRIParameters {
        return new NationalIPMMIRIParameters(_o.countryCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NationalIPMMIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NationalIPMMIRIParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("countryCode", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NationalIPMMIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NationalIPMMIRIParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NationalIPMMIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NationalIPMMIRIParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NationalIPMMIRIParameters: $.ASN1Decoder<NationalIPMMIRIParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NationalIPMMIRIParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NationalIPMMIRIParameters (el: _Element): NationalIPMMIRIParameters {
    if (!_cached_decoder_for_NationalIPMMIRIParameters) { _cached_decoder_for_NationalIPMMIRIParameters = function (el: _Element): NationalIPMMIRIParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NationalIPMMIRIParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "countryCode";
    let countryCode!: PrintableString;
    countryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(sequence[0]);
    {
        if (countryCode.length < 2 || countryCode.length > 2) {
            throw new ASN1SizeError("NationalIPMMIRIParameters.countryCode violates SIZE constraint");
        }
    }
    return new NationalIPMMIRIParameters(
        countryCode,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_NationalIPMMIRIParameters(el);
}

let _cached_encoder_for_NationalIPMMIRIParameters: $.ASN1Encoder<NationalIPMMIRIParameters> | null = null;

/**
 * @summary Encodes a(n) NationalIPMMIRIParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NationalIPMMIRIParameters, encoded as an ASN.1 Element.
 */
export
function _encode_NationalIPMMIRIParameters (value: NationalIPMMIRIParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NationalIPMMIRIParameters) { _cached_encoder_for_NationalIPMMIRIParameters = function (value: NationalIPMMIRIParameters, elGetter: $.ASN1Encoder<NationalIPMMIRIParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.countryCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NationalIPMMIRIParameters(value, elGetter);
}


/* eslint-enable */
