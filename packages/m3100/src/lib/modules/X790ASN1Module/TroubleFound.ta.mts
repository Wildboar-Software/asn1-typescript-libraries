/* eslint-disable */
import {
    NULL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TroubleFound_number,
    _decode_TroubleFound_number,
    _encode_TroubleFound_number,
} from '../X790ASN1Module/TroubleFound-number.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TroubleFound */
/**
 * @summary TroubleFound
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleFound  ::=  CHOICE {
 *   number
 *     INTEGER {-- Integer values are to be registered in the
 *              -- standard. Administrations may restrict
 *              -- the values to be used.
 *              pending(0), cameClear(1), centralOffice(2), switchTrouble(3),
 *              customerProvidedEquipment(4), facility(5),
 *              centralOfficeFacility(6), iCfacility(7), interexchangeCarrier(8),
 *              information(9), nonplanClassified(10), nonplanClassifiedIC(11),
 *              nonplanClassifiedEA(12), noTroubleFound(13), station(14),
 *              stationProductData(15), stationProductTerminal(16),
 *              stationProductVideo(17), stationProductVoice(18),
 *              stationWiring(19), otherStationEquipment(20), foundOKStation(21),
 *              servingBureau(22), testOK(23), publicServicesCoinSet(24),
 *              customerOperatingInstructions(25), testedOKVerifiedOK(26),
 *              coFacilityTestedFoundOK(27), outsideFacilityTestedFoundOK(28),
 *              referredOutToOtherDept(29), protectiveConnectingArrang(30),
 *              cpeCustomerResponsibility(31), preService(32), preServiceIC(33),
 *              preServiceEA(34), serviceNode(35), data(36),
 *              customerReferredToVendor(37), exchangeAccess(38),
 *              international(39), otherProvidedAccess(40), existingReport(41),
 *              cancelExclude(42), paBX(43), outsideWire(44),
 *              outsideTerminals(45), outsidePlantEquipment(46),
 *              outsidePlantFiberOptic(47), outsidePlantOther(48),
 *              coEquipmentOther(49), coEquipmentFrames(50), coConcentrator(51),
 *              receiverOffHook(52), cpeAuthorized(53), cpeTelcoMaintained(54),
 *              independentCompany(55), cpeCalledNumber(56),
 *              assigningProvisioning(57), interServiceCenter(58),
 *              referredOut(59), network(60)},
 *   identifier           OBJECT IDENTIFIER,
 *   noTroubleFoundValue  NULL, -- used when Trouble Found not relevant
 *   ...
 * }
 * ```
 */
export type TroubleFound =
    | { number_: TroubleFound_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { noTroubleFoundValue: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TroubleFound */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleFound */
let _cached_decoder_for_TroubleFound: $.ASN1Decoder<TroubleFound> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleFound */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleFound */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleFound
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleFound} The decoded data structure.
 */
export function _decode_TroubleFound(el: _Element) {
    if (!_cached_decoder_for_TroubleFound) {
        _cached_decoder_for_TroubleFound = $._decode_extensible_choice<TroubleFound>(
            {
                'UNIVERSAL 2': ['number_', _decode_TroubleFound_number],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
                'UNIVERSAL 5': ['noTroubleFoundValue', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_TroubleFound(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleFound */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleFound */
let _cached_encoder_for_TroubleFound: $.ASN1Encoder<TroubleFound> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleFound */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleFound */
/**
 * @summary Encodes a(n) TroubleFound into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleFound, encoded as an ASN.1 Element.
 */
export function _encode_TroubleFound(
    value: TroubleFound,
    elGetter: $.ASN1Encoder<TroubleFound>
) {
    if (!_cached_encoder_for_TroubleFound) {
        _cached_encoder_for_TroubleFound = $._encode_choice<TroubleFound>(
            {
                number_: _encode_TroubleFound_number,
                identifier: $._encodeObjectIdentifier,
                noTroubleFoundValue: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleFound(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleFound */

/* eslint-enable */
