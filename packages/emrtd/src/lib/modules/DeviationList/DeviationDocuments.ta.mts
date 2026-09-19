/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DocumentSignerIdentifier, _decode_DocumentSignerIdentifier, _encode_DocumentSignerIdentifier } from "../DeviationList/DocumentSignerIdentifier.ta.mjs";
// export { DocumentSignerIdentifier, _decode_DocumentSignerIdentifier, _encode_DocumentSignerIdentifier } from "../DeviationList/DocumentSignerIdentifier.ta.mjs";
import { IssuancePeriod, _decode_IssuancePeriod, _encode_IssuancePeriod } from "../DeviationList/IssuancePeriod.ta.mjs";
// export { IssuancePeriod, _decode_IssuancePeriod, _encode_IssuancePeriod } from "../DeviationList/IssuancePeriod.ta.mjs";


/**
 * @summary DeviationDocuments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviationDocuments ::= SEQUENCE {
 *     documentType [0] PrintableString (SIZE(2)) OPTIONAL,
 *     -- per MRZ, e.g. ‘P’
 *     dscIdentifier DocumentSignerIdentifier OPTIONAL,
 *     issuingDate [4] IssuancePeriod OPTIONAL,
 *     documentNumbers [5] SET OF PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeviationDocuments {
    constructor (
        /**
         * @summary `documentType`.
         * @public
         * @readonly
         */
        readonly documentType: OPTIONAL<PrintableString>,
        /**
         * @summary `dscIdentifier`.
         * @public
         * @readonly
         */
        readonly dscIdentifier: OPTIONAL<DocumentSignerIdentifier>,
        /**
         * @summary `issuingDate`.
         * @public
         * @readonly
         */
        readonly issuingDate: OPTIONAL<IssuancePeriod>,
        /**
         * @summary `documentNumbers`.
         * @public
         * @readonly
         */
        readonly documentNumbers: OPTIONAL<PrintableString[]>
    ) {}

    /**
     * @summary Restructures an object into a DeviationDocuments
     * @description
     * 
     * This takes an `object` and converts it to a `DeviationDocuments`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviationDocuments`.
     * @returns {DeviationDocuments}
     */
    public static _from_object (_o: { [_K in keyof (DeviationDocuments)]: (DeviationDocuments)[_K] }): DeviationDocuments {
        return new DeviationDocuments(_o.documentType, _o.dscIdentifier, _o.issuingDate, _o.documentNumbers);
    }


}

/**
 * @summary The Leading Root Component Types of DeviationDocuments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviationDocuments: $.ComponentSpec[] = [
    new $.ComponentSpec("documentType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dscIdentifier", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3))),
    new $.ComponentSpec("issuingDate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("documentNumbers", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DeviationDocuments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviationDocuments: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviationDocuments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviationDocuments: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviationDocuments: $.ASN1Decoder<DeviationDocuments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviationDocuments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviationDocuments (el: _Element): DeviationDocuments {
    if (!_cached_decoder_for_DeviationDocuments) { _cached_decoder_for_DeviationDocuments = function (el: _Element): DeviationDocuments {
    let documentType: OPTIONAL<PrintableString>;
    let dscIdentifier: OPTIONAL<DocumentSignerIdentifier>;
    let issuingDate: OPTIONAL<IssuancePeriod>;
    let documentNumbers: OPTIONAL<PrintableString[]>;
    const callbacks: $.DecodingMap = {
        "documentType": (_el: _Element): void => { documentType = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "dscIdentifier": (_el: _Element): void => { dscIdentifier = _decode_DocumentSignerIdentifier(_el); },
        "issuingDate": (_el: _Element): void => { issuingDate = $._decode_implicit<IssuancePeriod>(() => _decode_IssuancePeriod)(_el); },
        "documentNumbers": (_el: _Element): void => { documentNumbers = $._decode_implicit<PrintableString[]>(() => $._decodeSetOf<PrintableString>(() => $._decodePrintableString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviationDocuments,
        _extension_additions_list_spec_for_DeviationDocuments,
        _root_component_type_list_2_spec_for_DeviationDocuments,
        undefined,
    );
    return new DeviationDocuments(
        documentType,
        dscIdentifier,
        issuingDate,
        documentNumbers
    );
}; }
    return _cached_decoder_for_DeviationDocuments(el);
}

let _cached_encoder_for_DeviationDocuments: $.ASN1Encoder<DeviationDocuments> | null = null;

/**
 * @summary Encodes a(n) DeviationDocuments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviationDocuments, encoded as an ASN.1 Element.
 */
export
function _encode_DeviationDocuments (value: DeviationDocuments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviationDocuments) { _cached_encoder_for_DeviationDocuments = function (value: DeviationDocuments, elGetter: $.ASN1Encoder<DeviationDocuments>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.documentType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.documentType, $.BER)),
            /* IF_ABSENT  */ ((value.dscIdentifier === undefined) ? undefined : _encode_DocumentSignerIdentifier(value.dscIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.issuingDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IssuancePeriod, $.BER)(value.issuingDate, $.BER)),
            /* IF_ABSENT  */ ((value.documentNumbers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.documentNumbers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviationDocuments(value, elGetter);
}


/* eslint-enable */
