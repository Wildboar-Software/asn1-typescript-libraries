/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type PrintableString,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi1OperationId } from "../TETRA-HI1NotificationOperations/hi1OperationId.va.mjs";



/**
 * @summary National_HI1_ASN1parameters
 * @description
 *
 * National parameters for the TETRA HI1 notification. `countryCode` names the
 * country to which parameters after the extension marker apply. With FTP,
 * `HI1-Operation` is sent directly (clause D.10.2).
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * National-HI1-ASN1parameters ::= SEQUENCE
 * {
 *     domainID        [0] OBJECT IDENTIFIER (hi1OperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     countryCode        [1] PrintableString (SIZE (2)),
 *         -- Country Code according to ISO 3166-1 [67],
 *         -- the country to which the parameters inserted after the extension marker apply.
 *     ...
 *         -- In case a given country wants to use additional national parameters according to its law,
 *         -- these national parameters should be defined using the ASN.1 syntax and added after the
 *         -- extension marker (...).
 *         -- It is recommended that "version parameter" and "vendor identification parameter" are
 *         -- included in the national parameters definition. Vendor identifications can be
 *         -- retrieved from IANA web site (see�annex�K). Besides, it is recommended to avoid
 *         -- using tags from 240 to 255 in a formal type definition.
 * }
 * ```
 * 
 * @class
 */
export
class National_HI1_ASN1parameters {
    /**
     * @summary `domainID`.
     * @description
     *
     * Used when the FTP delivery mechanism is used. Constrained to
     * `hi1OperationId`. Optional. This module's comment does not require the
     * sending entity to include the OID; that rule is the HI2 `domainID`
     * comment, and it is not stated here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `countryCode`.
     * @description
     *
     * ISO 3166-1 code of the country to which the parameters after the
     * extension marker apply. Two characters. This document does not restate
     * ISO 3166-1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly countryCode: PrintableString;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Parameters a country adds, in ASN.1, after the extension marker. Include
     * a version parameter and a vendor identification parameter. Vendor
     * identifications are retrieved from the IANA web site (annex K). Avoid
     * tags 240 to 255. An unrecognized parameter is ignored and the record is
     * still processed; no special error is required for that case. Unrecognized
     * content is ignored, and the LEMF may raise an alarm. A record that cannot
     * be decoded is rejected when ROSE is used, or ignored.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2, annex K, annex G,
     * clause C.1.2.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        countryCode: PrintableString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.countryCode = countryCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a National_HI1_ASN1parameters
     * @description
     * 
     * This takes an `object` and converts it to a `National_HI1_ASN1parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `National_HI1_ASN1parameters`.
     * @returns {National_HI1_ASN1parameters}
     */
    public static _from_object (_o: { [_K in keyof (National_HI1_ASN1parameters)]: (National_HI1_ASN1parameters)[_K] }): National_HI1_ASN1parameters {
        return new National_HI1_ASN1parameters(_o.domainID, _o.countryCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of National_HI1_ASN1parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_National_HI1_ASN1parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("countryCode", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of National_HI1_ASN1parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_National_HI1_ASN1parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of National_HI1_ASN1parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_National_HI1_ASN1parameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_National_HI1_ASN1parameters: $.ASN1Decoder<National_HI1_ASN1parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) National_HI1_ASN1parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_National_HI1_ASN1parameters (el: _Element): National_HI1_ASN1parameters {
    if (!_cached_decoder_for_National_HI1_ASN1parameters) { _cached_decoder_for_National_HI1_ASN1parameters = function (el: _Element): National_HI1_ASN1parameters {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let countryCode!: PrintableString;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi1OperationId)) {
                throw new ASN1Error("National_HI1_ASN1parameters.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "countryCode": (_el: _Element): void => {
            countryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (countryCode.length < 2 || countryCode.length > 2) {
                throw new ASN1SizeError("National_HI1_ASN1parameters.countryCode violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_National_HI1_ASN1parameters,
        _extension_additions_list_spec_for_National_HI1_ASN1parameters,
        _root_component_type_list_2_spec_for_National_HI1_ASN1parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new National_HI1_ASN1parameters(
        domainID,
        countryCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_National_HI1_ASN1parameters(el);
}

let _cached_encoder_for_National_HI1_ASN1parameters: $.ASN1Encoder<National_HI1_ASN1parameters> | null = null;

/**
 * @summary Encodes a(n) National_HI1_ASN1parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The National_HI1_ASN1parameters, encoded as an ASN.1 Element.
 */
export
function _encode_National_HI1_ASN1parameters (value: National_HI1_ASN1parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_National_HI1_ASN1parameters) { _cached_encoder_for_National_HI1_ASN1parameters = function (value: National_HI1_ASN1parameters, elGetter: $.ASN1Encoder<National_HI1_ASN1parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.countryCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_National_HI1_ASN1parameters(value, elGetter);
}


/* eslint-enable */
